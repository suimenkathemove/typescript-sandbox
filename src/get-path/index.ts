type Leaf = object;
export type Node = { nodes: Node[] } | Leaf;

export type Path = number[];

export const getPath = (
  node: Node,
  predicate: (node: Node) => boolean,
): Path => {
  const findPath = (node: Node, path: Path): Path | null => {
    if (predicate(node)) return path;

    if ("nodes" in node) {
      for (let i = 0; i < node.nodes.length; i++) {
        const result = findPath(node.nodes[i]!, [...path, i]);
        if (result != null) {
          return result;
        }
      }
    }

    return null;
  };

  return findPath(node, []) ?? [];
};
