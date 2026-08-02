const { defineConfig, globalIgnores } = require("eslint/config");
const nextVitals = require("eslint-config-next/core-web-vitals");
const nextTs = require("eslint-config-next/typescript");
const prettierConfig = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  ...nextVitals,
  prettierConfig,
  ...nextTs,
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Ignore repository config files
    "*.config.js",
    "*.config.mjs",
    "tsconfig*.json",
  ]),
]);
