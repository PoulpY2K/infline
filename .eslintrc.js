module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    parser: 'vue-eslint-parser',
    extends: [
        'standard-with-typescript',
        '@nuxtjs/eslint-config-typescript',
        'plugin:prettier/recommended'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
    },
    plugins: [
        'vue'
    ],
    rules: {}
}
