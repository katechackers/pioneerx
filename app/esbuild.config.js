import { build } from "esbuild";

build({
  entryPoints: ["./src/index.ts"],
  outdir: "dist",
  target: "node22.12",
  platform: "node",
  bundle: false,
  minify: false,
  sourcemap: false,
  format: "esm",
  plugins: []
});
