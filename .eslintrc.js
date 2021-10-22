module.exports = {
  root: true,
  parserOptions: {
    extraFileExtensions: ['.vue', '.ts'],
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },

  env: {
    browser: true,
  },

  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-strongly-recommended',
    'prettier',
  ],

  plugins: ['@typescript-eslint', 'vue'],

  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
};
