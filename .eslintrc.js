// See ESLint rules documentation here:
// https://eslint.org/docs/rules/
module.exports = {
   globals: {
      cy: true,
      fetch: true,
   },
   rules: {
      '@typescript-eslint/no-explicit-any': 'off',
   },
   overrides: [
      {
         files: '**/*.spec.ts',
         rules: {
            camelcase: 'off',
         },
      },
   ],
};
