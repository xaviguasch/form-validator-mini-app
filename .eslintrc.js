module.exports = {
  env: {
    browser: true
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',

  rules: {
    indent: ['error', 'tab'],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
