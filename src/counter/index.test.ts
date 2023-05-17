import { expect, test } from "vitest";

import { counter } from ".";

test("counter", () => {
  expect(counter()).toBe(1);

  expect(counter()).toBe(2);
});
