module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'rules': {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
