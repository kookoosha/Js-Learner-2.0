module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'default-param-last': 0,
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 0,
    'global-require': 0,
    'react/style-prop-object': 0,
    'react/prop-types': 0,
    'no-restricted-exports': 0,
    'react/jsx-props-no-spreading': 0,
    'no-unused-vars': 0,
    'no-console': 0,
    'react/jsx-no-constructed-context-values': 0,
    'import/no-unresolved': 0,
    'max-len': 0,
  },
};
