/* eslint-disable no-restricted-exports */
// @ts-check

import { dirname } from "path";
import { fileURLToPath } from "url";

import { fixupPluginRules } from "@eslint/compat";
import eslint from "@eslint/js";
// @ts-ignore
import importPlugin from "eslint-plugin-import";
import pluginPrettier from "eslint-plugin-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

const __dirname = dirname(fileURLToPath(import.meta.url));

// ts-prune-ignore-next
export default tseslint.config(
  /**
   * Global ignores
   */
  {
    ignores: [
      "coverage",
      "dist",
      "node_modules",
      "eslint.config.mjs",
      "tailwind.config.js",
    ],
  },

  /**
   * Global rules
   */
  {
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...tseslint.configs.strictTypeChecked,
    ],
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.mjs", "**/*.jsx"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
        ...globals.browser,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      prettier: pluginPrettier,
      import: fixupPluginRules(importPlugin),
    },
    rules: {
      ...eslint.configs.recommended.rules,

      "no-console": "error",
      "object-shorthand": ["error", "always"],
      "no-extra-boolean-cast": "error",
      "no-duplicate-imports": "error",
      "arrow-body-style": ["error", "as-needed"],
      "no-nested-ternary": "error",
      "default-param-last": "error",
      complexity: ["error", 15],
      "no-empty-pattern": "off",

      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          vars: "all",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],

      "import/first": "error",
      "import/newline-after-import": "error",
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          groups: ["builtin", "external", "internal", "unknown"],
          pathGroupsExcludedImportTypes: ["builtin"],
          pathGroups: [
            {
              pattern: "core/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "theme/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "lib/**",
              group: "internal",
              position: "after",
            },
            {
              pattern: "sections/**",
              group: "internal",
              position: "after",
            },
          ],
        },
      ],
    },
  },
);