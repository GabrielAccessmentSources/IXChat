module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["eslint:recommended"],
    overrides: [
        {
            files: ["**/*.test.js", "**/*.test.ts"], // Include test files
            extends: ["plugin:jest/recommended"], // Extend Jest configuration
            env: {
                jest: true,
            },
        },
        {
            env: {
                node: true,
            },
            globals: {
                process: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        semi: [2, "always"],
        quotes: [2, "double", { avoidEscape: true }],
        "object-curly-spacing": ["error", "always"],
        "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    },
};