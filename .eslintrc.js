module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['simple-import-sort','prettier'],
  rules: {
    'simple-import-sort/imports': 'error',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': "off", 
  },
}
