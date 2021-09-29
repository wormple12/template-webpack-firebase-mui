module.exports = {
   semi: true,
   trailingComma: 'all',
   singleQuote: true,
   printWidth: 120,
   tabWidth: 3,
   arrowParens: 'avoid',
   overrides: [
      {
         files: '**/*.scss',
         options: {
            tabWidth: 2,
         },
      },
   ],
};
