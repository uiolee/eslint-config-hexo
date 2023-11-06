'use strict';

/**
 * @type { import("@types/eslint").Linter.FlatConfig[] }
 */
module.exports = [
  // ...require('./eslint.js'),
  {
    rules: {
      'no-unused-expressions': 'off'
    },
    languageOptions: {
      globals: {
        ...require('globals').mocha
      }
    }
  }
];
