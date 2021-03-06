module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "airbnb",        // eslint-config-airbnb
  "parser": "babel-eslint",   // babel-eslint
  "parserOptions": {          // babel-eslint
    "sourceType": "module",
    "allowImportExportEverywhere": false
  },
  "plugins": [
    "react",                  // eslint-plugin-react
  ],
  "rules": {
    "strict": 0,              // babel-eslint
    "brace-style": [
      "error",
      "stroustrup"
    ],
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "consistent-return": [
      "error",
      { "treatUndefinedAsUnspecified": true }
    ],
    "global-require": 1,
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "keyword-spacing": [
      "error",
      {
        "before": true,
        "after": true,
        "overrides": {
          "catch": {
            "after": false
          },
        }
      }
    ],
    "max-len": [
      "error",
      {
        "code": 120
      }
    ],
    "no-console": [
      "error",
      {
        allow: ["warn", "error"]
      }
    ],
    "no-use-before-define": 0,
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "arrow-parens": 1,
    "new-cap": 1,
    "no-undef": 1,

    /* eslint-plugin-react */
    "react/jsx-indent": [
      "error",
      2
    ],
    "react/jsx-indent-props": [
      "error",
      2
    ],
    "react/prop-types": 1,
    "react/sort-comp": 1,
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 1,
    "react/forbid-prop-types": 1,

    /* eslint-plugin-import */
    "import/no-unresolved": 1,

    /* eslint-plugin-jsx-a11y */
    "jsx-a11y/href-no-hash": 1,
    "jsx-a11y/no-static-element-interactions": 1,
  }
};
