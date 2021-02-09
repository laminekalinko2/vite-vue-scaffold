/* eslint-disable  */
module.exports = {
   parserOptions: {
      ecmaVersion: 2020,
   },
   extends: [
      'plugin:vue/vue3-recommended',
      'eslint:recommended',
      '@vue/typescript/recommended',
      '@vue/prettier',
      '@vue/prettier/@typescript-eslint',
   ],
   rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/max-attributes-per-line': [
         'error',
         {
            singleline: 3,
            multiline: {
               max: 1,
               allowFirstLine: false,
            },
         },
      ],
      indent: ['error', 3],
      'vue/html-indent': [
         'error',
         3,
         {
            baseIndent: 1,
            switchCase: 1,
            ignores: [],
         },
      ],
      'vue/script-indent': [
         'error',
         3,
         {
            baseIndent: 0,
            switchCase: 1,
            ignores: [],
         },
      ],
      'no-plusplus': 'off',
      'arrow-parens': 'off',
      'max-len': [
         'error',
         {
            code: 120,
         },
      ],
      'func-names': 'off',
      'space-before-function-paren': 'off',
      'consistent-return': 'off',
      'vue/no-v-html': 'off',
   },
   overrides: [
      {
         files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
         env: {
            jest: true,
         },
      },
      {
         files: ['*.vue'],
         rules: {
            indent: 'off',
         },
      },
   ],
}
