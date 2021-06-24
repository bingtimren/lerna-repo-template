import { greeting } from "../src/greeting";
test("greeting", () => {
  const result = greeting("Winston");
  expect(result).toMatch(/Hello.*Winston/);
});
