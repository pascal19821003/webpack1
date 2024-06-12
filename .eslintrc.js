/* eslint-disable no-undef */
module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript'
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        // 'import/no-unresolved': 'error',
        // 'import/order': ['error', { 'newlines-between': 'always' }],
        "no-unused-vars":"off",
        "@typescript-eslint/no-unused-vars":"off",
        "import/order":"off",
        "no-undef":"warn"
    },
    ignorePatterns: ['node_modules/', 'dist/']
};
