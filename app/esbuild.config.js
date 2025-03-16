import { build } from "esbuild";

async function runBuild() {
  await build({
    // **: any directory depth
    // *: any characters
    entryPoints: ["./src/**/*.ts"],
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
