module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'warn',
    'no-unused-vars': 'warn'
  }
};