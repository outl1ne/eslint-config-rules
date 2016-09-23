module.exports = {
    rules: {
        "accessor-pairs": 0,
        "array-callback-return": 2,
        "block-scoped-var": 2,
        "complexity": [
            0, 11
        ],
        "consistent-return": 2,
        "curly": [
            2, "multi-line"
        ],
        "default-case": 0,
        "dot-notation": [
            2, {
                "allowKeywords": true
            }
        ],
        "dot-location": 0,
        "eqeqeq": [
            2, "allow-null"
        ],
        "guard-for-in": 0,
        "id-blacklist": 0,
        "no-alert": 1,
        "no-caller": 2,
        "no-case-declarations": 2,
        "no-div-regex": 0,
        "no-else-return": 2,
        "no-empty-function": [
            2, {
                "allow": ["arrowFunctions", "functions", "methods"]
            }
        ],
        "no-empty-pattern": 2,
        "no-extra-label": 2,
        "no-eq-null": 0,
        "no-eval": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-fallthrough": 0,
        "no-floating-decimal": 2,
        "no-implicit-coercion": 0,
        "no-implied-eval": 2,
        "no-invalid-this": 0,
        "no-iterator": 2,
        "no-labels": 1,
        "no-lone-blocks": 2,
        "no-loop-func": 2,
        "no-magic-numbers": [
            0, {
                "ignore": [],
                "ignoreArrayIndexes": true,
                "enforceConst": true,
                "detectObjects": false
            }
        ],
        "no-multi-spaces": 1,
        "no-multi-str": 2,
        "no-native-reassign": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-wrappers": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-param-reassign": [
            2, {
                "props": true
            }
        ],
        "no-process-env": 0,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-restricted-syntax": [
            2, "DebuggerStatement", "LabeledStatement", "WithStatement"
        ],
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-compare": 2,
        "no-sequences": 2,
        "no-throw-literal": 2,
        "no-unmodified-loop-condition": 0,
        "no-unsafe-finally": 2,
        "no-unused-expressions": 0,
        "no-unused-labels": 2,
        "no-useless-call": 0,
        "no-useless-concat": 2,
        "no-useless-escape": 2,
        "no-void": 0,
        "no-warning-comments": [
            0, {
                "terms": [
                    "todo", "fixme", "xxx"
                ],
                "location": "start"
            }
        ],
        "no-with": 2,
        "radix": 2,
        "vars-on-top": 2,
        "wrap-iife": [
            2, "outside"
        ],
        "yoda": 2,
        "no-cond-assign": [
            2, "always"
        ],
        "no-console": 0,
        "no-constant-condition": 1,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-dupe-args": 2,
        "no-dupe-keys": 2,
        "no-duplicate-case": 2,
        "no-empty-character-class": 2,
        "no-empty": 2,
        "no-ex-assign": 2,
        "no-extra-boolean-cast": 0,
        "no-extra-parens": [
            0,
            "all", {
                "conditionalAssign": true,
                "nestedBinaryExpressions": false
            }
        ],
        "no-extra-semi": 2,
        "no-func-assign": 2,
        "no-inner-declarations": 2,
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-negated-in-lhs": 2,
        "no-obj-calls": 2,
        "no-regex-spaces": 2,
        "no-sparse-arrays": 2,
        "no-unreachable": 2,
        "use-isnan": 2,
        "valid-jsdoc": 0,
        "valid-typeof": 2,
        "no-unexpected-multiline": 0,
        "callback-return": 0,
        "global-require": 0,
        "handle-callback-err": 0,
        "no-mixed-requires": [
            0, false
        ],
        "no-new-require": 0,
        "no-path-concat": 0,
        "no-process-exit": 0,
        "no-restricted-modules": 0,
        "no-sync": 0,
        "import/no-unresolved": 0,
        "array-bracket-spacing": [
            2, "never"
        ],
        "block-spacing": [
            2, "always"
        ],
        "brace-style": [
            2,
            "1tbs", {
                "allowSingleLine": true
            }
        ],
        "camelcase": [
            2, {
                "properties": "never"
            }
        ],
        "comma-spacing": [
            2, {
                "before": false,
                "after": true
            }
        ],
        "comma-style": [
            2, "last"
        ],
        "computed-property-spacing": [
            2, "never"
        ],
        "consistent-this": 0,
        "eol-last": 2,
        "func-names": 1,
        "func-style": 0,
        "id-length": 0,
        "indent": [
            2,
            2, {
                "SwitchCase": 1
            }
        ],
        "jsx-quotes": 1,
        "key-spacing": [
            2, {
                "beforeColon": false,
                "afterColon": true
            }
        ],
        "keyword-spacing": [
            2, {
                "before": true,
                "after": true,
                "overrides": {
                    "return": {
                        "after": true
                    },
                    "throw": {
                        "after": true
                    },
                    "case": {
                        "after": true
                    }
                }
            }
        ],
        "lines-around-comment": 0,
        "linebreak-style": 0,
        "max-len": [
            1, {
                "code": 120,
                "ignoreComments": true,
                "ignoreUrls": true
            }
        ],
        "max-nested-callbacks": 0,
        "max-statements-per-line": [
            0, {
                "max": 1
            }
        ],
        "new-cap": [
            2, {
                "newIsCap": true
            }
        ],
        "new-parens": 0,
        "newline-after-var": 0,
        "newline-before-return": 0,
        "newline-per-chained-call": [
            2, {
                "ignoreChainWithDepth": 3
            }
        ],
        "no-array-constructor": 2,
        "no-continue": 0,
        "no-inline-comments": 0,
        "no-lonely-if": 0,
        "no-mixed-spaces-and-tabs": 2,
        "no-multiple-empty-lines": [
            2, {
                "max": 2,
                "maxEOF": 1
            }
        ],
        "no-negated-condition": 0,
        "no-nested-ternary": 2,
        "no-new-object": 2,
        "no-spaced-func": 2,
        "no-ternary": 0,
        "no-trailing-spaces": 1,
        "no-underscore-dangle": 0,
        "no-unneeded-ternary": [
            2, {
                "defaultAssignment": false
            }
        ],
        "no-whitespace-before-property": 2,
        "object-curly-spacing": [
            1, "always"
        ],
        "one-var": [
            2, "never"
        ],
        "one-var-declaration-per-line": [
            2, "always"
        ],
        "operator-assignment": 0,
        "operator-linebreak": 0,
        "padded-blocks": 0,
        "quote-props": 0,
        "quotes": [
            1, "single", {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "id-match": 0,
        "require-jsdoc": 0,
        "semi-spacing": [
            2, {
                "before": false,
                "after": true
            }
        ],
        "semi": 1,
        "sort-vars": 0,
        "space-before-blocks": 2,
        "space-before-function-paren": [
            1, "never"
        ],
        "space-in-parens": [
            2, "never"
        ],
        "space-infix-ops": 2,
        "space-unary-ops": 0,
        "spaced-comment": [
            2,
            "always", {
                "exceptions": [
                    "-", "+"
                ],
                "markers": ["=", "!"]
            }
        ],
        "wrap-regex": 0,
        "init-declarations": 0,
        "no-catch-shadow": 0,
        "no-delete-var": 2,
        "no-implicit-globals": 0,
        "no-label-var": 0,
        "no-self-assign": 2,
        "no-shadow-restricted-names": 2,
        "no-shadow": 2,
        "no-undef-init": 0,
        "no-undef": 2,
        "no-undefined": 0,
        "no-unused-vars": [
            1, {
                "vars": "local",
                "args": "after-used"
            }
        ],
        "no-use-before-define": 0,
        "arrow-body-style": [
            2, "as-needed"
        ],
        "arrow-parens": 0,
        "arrow-spacing": [
            2, {
                "before": true,
                "after": true
            }
        ],
        "comma-dangle": 0,
        "constructor-super": 0,
        "generator-star-spacing": 0,
        "no-class-assign": 2,
        "no-confusing-arrow": [
            2, {
                "allowParens": true
            }
        ],
        "no-const-assign": 2,
        "no-dupe-class-members": 2,
        "no-duplicate-imports": 2,
        "no-new-symbol": 2,
        "no-restricted-globals": 0,
        "no-restricted-imports": 0,
        "no-this-before-super": 0,
        "no-var": 2,
        "no-useless-computed-key": 2,
        "no-useless-constructor": 2,
        "object-shorthand": [
            2, "always"
        ],
        "prefer-arrow-callback": [
            2, {
                "allowNamedFunctions": true,
                "allowUnboundThis": true
            }
        ],
        "prefer-const": 1,
        "prefer-spread": 0,
        "prefer-reflect": 0,
        "prefer-rest-params": 2,
        "prefer-template": 1,
        "require-yield": 0,
        "sort-imports": 0,
        "template-curly-spacing": 2,
        "yield-star-spacing": [
            2, "after"
        ],
        "import/export": 2,
        "import/default": 0,
        "import/extensions": [
            0, "never"
        ],
        "import/named": 0,
        "import/namespace": 0,
        "import/no-extraneous-dependencies": [
            0, {
                "devDependencies": false,
                "optionalDependencies": false
            }
        ],
        "import/no-named-as-default": 0,
        "import/no-commonjs": 0,
        "import/no-amd": 2,
        "import/imports-first": [
            0, "absolute-first"
        ],
        "import/no-duplicates": 0,
        "import/no-deprecated": 0,
        "import/no-namespace": 0,
        "import/no-named-as-default-member": 0,
        "import/no-nodejs-modules": 0,
        "import/order": [
            0, {
                "groups": [
                    "builtin",
                    "external",
                    "internal",
                    "parent",
                    "sibling",
                    "index"
                ],
                "newlines-between": "never"
            }
        ],
        "import/newline-after-import": 0,
        "import/no-mutable-exports": 2,
        "strict": [
            2, "never"
        ],
        "react/display-name": [
            0, {
                "ignoreTranspilerName": false
            }
        ],
        "react/forbid-prop-types": [
            0, {
                "forbid": ["any", "array", "object"]
            }
        ],
        "react/jsx-boolean-value": [
            2, "never"
        ],
        "react/jsx-closing-bracket-location": 0,
        "react/jsx-curly-spacing": [
            2,
            "never", {
                "allowMultiline": true
            }
        ],
        "react/jsx-handler-names": [
            0, {
                "eventHandlerPrefix": "handle",
                "eventHandlerPropPrefix": "on"
            }
        ],
        "react/jsx-indent-props": 0,
        "react/jsx-key": 0,
        "react/jsx-max-props-per-line": [
            0, {
                "maximum": 1
            }
        ],
        "react/jsx-no-bind": [
            2, {
                "ignoreRefs": true,
                "allowArrowFunctions": true,
                "allowBind": false
            }
        ],
        "react/jsx-no-duplicate-props": [
            0, {
                "ignoreCase": false
            }
        ],
        "react/jsx-no-literals": 0,
        "react/jsx-no-undef": 2,
        "react/jsx-pascal-case": 2,
        "react/sort-prop-types": [
            0, {
                "ignoreCase": false,
                "callbacksLast": false
            }
        ],
        "react/jsx-sort-prop-types": 0,
        "react/jsx-sort-props": [
            0, {
                "ignoreCase": false,
                "callbacksLast": false
            }
        ],
        "react/jsx-filename-extension": 0,
        "react/jsx-uses-react": 1,
        "react/jsx-uses-vars": 1,
        "react/no-danger": 0,
        "react/no-deprecated": 1,
        "react/no-did-mount-set-state": 2,
        "react/no-did-update-set-state": 2,
        "react/no-direct-mutation-state": 0,
        "react/no-is-mounted": 2,
        "react/no-multi-comp": [
            2, {
                "ignoreStateless": true
            }
        ],
        "react/no-set-state": 0,
        "react/no-string-refs": 0,
        "react/no-unknown-property": 2,
        "react/prefer-es6-class": [
            2, "always"
        ],
        "react/prefer-stateless-function": 0,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 1,
        "react/require-extension": [
            0, {
                "extensions": [".jsx"]
            }
        ],
        "react/require-render-return": 2,
        "react/self-closing-comp": 0,
        "react/jsx-space-before-closing": [
            2, "always"
        ],
        "react/sort-comp": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-equals-spacing": [
            2, "never"
        ],
        "react/jsx-indent": [
            1, 2
        ],
    }
};
