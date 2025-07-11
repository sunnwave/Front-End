module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "next/core-web-vitals", // ✅ Next.js 12에도 호환됨
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // ✅ Next.js 12에선 자동 JSX
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/triple-slash-reference": "off",
    "prefer-const": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
