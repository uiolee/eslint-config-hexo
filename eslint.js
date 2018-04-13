module.exports = {
  extends: ['eslint:recommended', 'plugin:node/recommended'],
  plugins: ['node'],
  rules: {
    'curly': ['error', 'multi-line'],
    'no-console': 'off',
    'no-path-concat': 'error',
    'handle-callback-err': 'error',
    'no-use-before-define': ['error', 'nofunc'],
    'no-shadow-restricted-names': 'error',
    'block-scoped-var': 'error',
    'dot-notation': 'error',
    'eqeqeq': ['error', 'allow-null'],
    'no-else-return': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true
    }],
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-with': 'error',
    'radix': 'error',
    'no-self-compare': 'error',
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'none'
    }],
    'indent': ['error', 2, {
      SwitchCase: 1
    }],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-empty': ['error', {
      allowEmptyCatch: true
    }],
    'brace-style': ['error', '1tbs', {
      allowSingleLine: true
    }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': 'error',
    'no-multi-str': 'error',
    'one-var': ['error', {
      uninitialized: 'always',
      initialized: 'never'
    }],
    'dot-location': ['error', 'property'],
    'operator-linebreak': ['error', 'before'],
    'key-spacing': ['error', {
      beforeColon: false,
      afterColon: true
    }],
    'space-unary-ops': ['error', {
      words: false,
      nonwords: false
    }],
    'comma-spacing': ['error', {
      before: false,
      after: true
    }],
    'semi-spacing': ['error', {
      before: false,
      after: true
    }],
    'func-call-spacing': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'yoda': ['error', 'never'],
    'comma-style': ['error', 'last'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'wrap-iife': 'error',
    'space-infix-ops': 'error',
    'keyword-spacing': ['error', {}],
    'space-before-blocks': ['error', 'always'],
    'no-extra-parens': ['error', 'all', {
      conditionalAssign: false,
      returnAssign: false,
      nestedBinaryExpressions: false
    }],
    'no-unsafe-negation': 'error',
    'array-callback-return': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-extra-label': 'error',
    'no-implicit-globals': 'error',
    'no-new-func': 'error',
    'no-new': 'error',
    'no-proto': 'error',
    'no-sequences': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'prefer-promise-reject-errors': 'error',
    'no-label-var': 'error',
    'no-undef-init': 'error',
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'lines-around-comment': ['error', {
      beforeBlockComment: true
    }],
    'new-cap': 'error',
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'spaced-comment': ['error', 'always'],
    'template-tag-spacing': ['error', 'never'],
    'unicode-bom': ['error', 'never'],
    'arrow-spacing': 'error',
    'generator-star-spacing': ['error', 'after'],
    'no-confusing-arrow': ['error', {
      allowParens: true
    }],
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'template-curly-spacing': ['error', 'never'],
    'yield-star-spacing': ['error', 'after'],
    'no-mixed-operators': 'error',
    'strict': 'error'
  },
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6
  }
};
