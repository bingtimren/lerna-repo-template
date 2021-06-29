import { APIGatewayProxyHandlerV2 } from "aws-lambda"; // eslint-disable-line import/no-unresolved
import { greeting } from "greeting";

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
  const greetingStr =
    event.queryStringParameters && event.queryStringParameters.name
      ? greeting(event.queryStringParameters.name)
      : "Stranger";
  return {
    statusCode: 200,
    body: greetingStr,
  };
};
