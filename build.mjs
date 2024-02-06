import dts from 'bun-plugin-dts'

await Bun.build({
  entrypoints: ["./src/index.ts"],
  // splitting: true,
  outdir: "./dist",
  minify: true,
  plugins: [dts()],
  externals: ["react", "react-dom"],
});
