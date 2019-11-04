module.exports = {
  rules: {
    ...require('./index').rules,
    'react/display-name': [
      0,
      {
        ignoreTranspilerName: false,
      },
    ],
    'react/forbid-prop-types': [
      0,
      {
        forbid: ['any', 'array', 'object'],
      },
    ],
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-curly-spacing': [
      2,
      'never',
      {
        allowMultiline: true,
      },
    ],
    'react/jsx-handler-names': [
      0,
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-indent-props': 0,
    'react/jsx-key': 0,
    'react/jsx-max-props-per-line': [
      0,
      {
        maximum: 1,
      },
    ],
    'react/jsx-no-bind': [
      2,
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowBind: false,
      },
    ],
    'react/jsx-no-duplicate-props': [
      0,
      {
        ignoreCase: false,
      },
    ],
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/sort-prop-types': [
      0,
      {
        ignoreCase: false,
        callbacksLast: false,
      },
    ],
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': [
      0,
      {
        ignoreCase: false,
        callbacksLast: false,
      },
    ],
    'react/jsx-filename-extension': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 0,
    'react/no-deprecated': 1,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 0,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': [
      2,
      {
        ignoreStateless: true,
      },
    ],
    'react/no-set-state': 0,
    'react/no-string-refs': 0,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': [2, 'always'],
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 1,
    'react/require-extension': [
      0,
      {
        extensions: ['.jsx'],
      },
    ],
    'react/require-render-return': 2,
    'react/self-closing-comp': 0,
    'react/sort-comp': 0,
    'react/jsx-tag-spacing': [
      1,
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
      },
    ],
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-indent': [1, 2],
  },
};
