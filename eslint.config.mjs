import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default [
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    files: ["**/*.jsx"],
    rules: {
      ...fixupConfigRules(reactRecommended),
    },
  },
];
