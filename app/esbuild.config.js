import path from "node:path";
import { build } from "esbuild";
import { glob } from "glob";

const entryPoints = await glob([path.resolve("./src/**/*.ts")]);

build({
  entryPoints,
  outdir: "dist",
  target: "node22.12.0",
  platform: "node",
  bundle: false,
  minify: false,
  sourcemap: false,
  format: "esm",
  plugins: [],
});
