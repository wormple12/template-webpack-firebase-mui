module.exports = {
   env: {
      browser: true,
      es2021: true,
      node: true,
   },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      // Enables eslint-plugin-prettier and eslint-config-prettier.
      // This will display prettier errors as ESLint errors.
      // Make sure this is always the last configuration in the extends array.
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaFeatures: {
         jsx: true,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
   },
   plugins: ['react', '@typescript-eslint'],
   rules: {
      /* indent: ['error', 4, { ignoredNodes: ['JSXElement *'] }], */
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      /* 'react/jsx-indent': ['error', 2], */
      'react/prop-types': 'off',
      'prettier/prettier': ['error', { endOfLine: 'auto' }],
   },
   settings: {
      react: {
         version: 'detect',
         // Tells eslint-plugin-react to automatically detect the version of React to use
      },
   },
};
