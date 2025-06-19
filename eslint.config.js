import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      // reglas de estilo para formato:
      indent: ["error", 2],                 // indentación 2 espacios
      quotes: ["error", "double", { avoidEscape: true }],  // comillas dobles, excepto para evitar escape
      semi: ["error", "always"],            // punto y coma obligatorio
      "no-trailing-spaces": "error",       // sin espacios al final de línea
      "space-before-function-paren": ["error", "never"], // sin espacio antes de paréntesis en funciones

      // reglas que ya tenías:
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
