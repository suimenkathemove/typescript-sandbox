import { describe, expect, test } from "vitest";

import { Node, getPath } from ".";

describe("getPath", () => {
  test("[ng, [ng, ok]]", () => {
    const node: Node = {
      nodes: [{ type: "ng" }, { nodes: [{ type: "ng" }, { type: "ok" }] }],
    };
    const result = getPath(
      node,
      (node) => "type" in node && node.type === "ok",
    );
    expect(result).toStrictEqual([1, 1]);
  });

  test("[ok, ng, ok]", () => {
    const node: Node = {
      nodes: [{ type: "ok" }, { type: "ng" }, { type: "ok" }],
    };
    const result = getPath(
      node,
      (node) => "type" in node && node.type === "ok",
    );
    expect(result).toStrictEqual([0]);
  });
});
