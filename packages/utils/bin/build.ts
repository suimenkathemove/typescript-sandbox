import * as path from "path";

import { build } from "esbuild";

void build({
  entryPoints: [path.resolve(__dirname, "../lib/index.ts")],
  bundle: true,
  outdir: "dist",
  platform: "node",
});
