module.exports =  {
  overrides: [
    {
      files: [
        "./**/*.ts"
      ],
      parser: "@typescript-eslint/parser",
      extends:  [
        'plugin:@typescript-eslint/recommended',
      ],
      parserOptions:  {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      rules: {
        "indent": ["error", 2],
        "quotes": ["error", "single"]
      },
    },
    {
      files: [
        "./**/*.tsx",
      ],
      parser: "@typescript-eslint/parser",
      extends:  [
        'plugin:@typescript-eslint/recommended',
      ],
      parserOptions:  {
        ecmaVersion: 2018,
        sourceType: 'module',
        jsx: true,
      },
      rules: {
        "indent": ["error", 2],
        "quotes": ["error", "single"]
      },
    },
    {
      files: [
        "./*.js"
      ],
      extends: [
        'eslint:recommended',
      ],
      env: {
        node: true
      },
      parserOptions:  {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      rules: {
        "indent": ["error", 2],
        "quotes": ["error", "single"],
        "no-unused-vars": "off",
      }
    },
  ]
};
