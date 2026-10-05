import { defineConfig } from "vitest/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

// `.mts` is native ESM, where __dirname does not exist. fileURLToPath works on
// all supported Node versions, unlike import.meta.dirname (needs >= 20.11).
const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(rootDir, "./src"),
        },
    },
    test: {
        environment: "node",
        include: ["src/**/*.test.ts", "scripts/**/*.test.mjs"],
    },
});
