module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'import/prefer-default-export': 0,
    'import/extensions': [
      'error',
      'never',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-unresolved': 0,
    'lines-between-class-members': 0,
  },
  overrides: [
    {
      files: ['**/*.test.ts', 'test.ts'],
      env: {
        jest: true,
      },
      extends: ['plugin:jest/recommended', 'plugin:jest-dom/recommended'],
      plugins: ['jest', 'jest-dom'],
    },
  ],
};
