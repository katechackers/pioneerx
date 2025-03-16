import path from "node:path";
import { build } from "esbuild";
import { glob } from "glob";

async function runBuild() {

  /* glob: it's a function from the glob package 
  that finds files matching a pattern, similar to how shell pattern matching works. */
  // **: any directory depth
  // *: any characters
  const entryPoints = await glob("./src/**/*.ts");

  await build({
    entryPoints,
    outdir: "dist",
    target: "node22",
    platform: "node",
    bundle: false,
    minify: false,
    sourcemap: false,
    format: "esm",
    plugins: [],
  });

  console.log("Build completed successfully!");
}

runBuild().catch((err) => {
  console.error("Build failed:", err);
  process.exit(1);
});
