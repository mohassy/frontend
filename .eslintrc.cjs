module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "prettier/react",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react-refresh"],
    rules: {
        "react-refresh/only-export-components": "warn",
    },
};
