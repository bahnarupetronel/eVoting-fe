module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugins: [react, react-hooks]",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      js: true,
    },
  },
  plugins: ["react", "@typescript-eslint", "import", "jsx-a11y"],
  rules: {
    "react-hooks/exhaustive-deps": "error",
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 0,
    "no-undef-init": "warning",
    "no-undef": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx"],
      },
    },
  },
};
