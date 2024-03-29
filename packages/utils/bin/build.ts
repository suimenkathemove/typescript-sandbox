// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { build } = require("esbuild");

void build({
  entryPoints: [path.resolve(__dirname, "../lib/index.ts")],
  bundle: true,
  outfile: "dist/index.js",
  format: "cjs",
  minify: true,
  sourcemap: true,
});
