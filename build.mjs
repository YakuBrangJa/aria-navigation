import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ["./src/index.ts"],
  // splitting: true,
  format: "esm",
  outdir: "./dist",
  minify: true,
  plugins: [dts()],
  externals: ["react", "react-dom"],
});

    // "build": "bun run build.mjs",