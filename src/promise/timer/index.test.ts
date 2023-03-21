import { expect, test } from "vitest";

import { timer } from ".";

test("timer", async () => {
  const result = await timer("OK", 1000);
  expect(result).toBe("OK");
});
