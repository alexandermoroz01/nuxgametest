import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";
import playwright from "eslint-plugin-playwright";
import tseslint from "typescript-eslint";

export default defineConfig(
    { ignores: ["playwright-report", "test-results", "playwright/.auth"] },
    eslint.configs.recommended,
    tseslint.configs.recommended,
    {
        files: ["src/tests/**/*.ts"],
        ...playwright.configs["flat/recommended"],
    },
    prettier,
);
