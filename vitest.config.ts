import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./react/vitest.setup.ts"],
    include: ["react/**/*.{test,spec}.{ts,tsx}"],
  },
});
