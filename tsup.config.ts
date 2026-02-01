import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "core/index.ts",
    "cli/blackvideo-accessory.ts"
  ],
  format: ["esm"],
  dts: true,
  clean: true
});
