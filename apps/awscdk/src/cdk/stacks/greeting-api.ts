import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as lambdaNodeJs from "@aws-cdk/aws-lambda-nodejs";
import * as apigwv2 from "@aws-cdk/aws-apigatewayv2";
import * as apigwv2Integration from "@aws-cdk/aws-apigatewayv2-integrations";

export class GreetingAPIStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // API Gateway => Route => Integration => Function

    // The Lambda function
    const greetingFunc = new lambdaNodeJs.NodejsFunction(this, "greetingFunc", {
      description: "greeting a person by name",
      runtime: lambda.Runtime.NODEJS_14_X,
      entry: "src/cdk/stacks/greeting-api.greetingFunc.ts", // default defining-file.function-id.ts (or .js)
      handler: "handler", // default "handler"
      bundling: {
        minify: true,
      },
    });

    // Integration
    const greetingFuncIntegration =
      new apigwv2Integration.LambdaProxyIntegration({
        handler: greetingFunc,
        payloadFormatVersion: apigwv2.PayloadFormatVersion.VERSION_2_0,
      });

    // the HTTP API Gateway
    const greetingGateway = new apigwv2.HttpApi(this, "greetingApi", {
      description: "open-api: greeting a person by name",
      corsPreflight: {
        allowCredentials: false,
        allowHeaders: ["*"],
        allowMethods: [apigwv2.CorsHttpMethod.ANY],
        allowOrigins: ["*"],
      },
    });

    // Route
    new apigwv2.HttpRoute(this, "greetingRoute", {
      httpApi: greetingGateway,
      integration: greetingFuncIntegration,
      routeKey: apigwv2.HttpRouteKey.with("/greeting", apigwv2.HttpMethod.GET),
    });
  }
}
