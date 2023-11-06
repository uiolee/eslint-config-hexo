'use strict';

const ts_parser = require('@typescript-eslint/parser');

const { FlatCompat } = require('@eslint/eslintrc');
const compat = new FlatCompat({
  baseDirectory: __dirname
});

/**
 * @type { import("@types/eslint").Linter.FlatConfig[] }
 */
module.exports = [
  ...require('./eslint.js'),
  ...compat.extends('plugin:@typescript-eslint/recommended'),
  {
    languageOptions: {
      parser: ts_parser
    },
    rules: {
      'node/no-unsupported-features/es-syntax': [
        'error',
        { ignores: ['modules'] }
      ],
      'node/no-missing-import': ['error', { tryExtensions: ['.js', '.ts'] }]
    }
  }
];
