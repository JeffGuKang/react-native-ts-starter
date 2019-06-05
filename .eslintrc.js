module.exports =  {
  parser:  "@typescript-eslint/parser",  // Specifies the ESLint parser
  extends:  [
    "plugin:@typescript-eslint/recommended", // uses typescript-specific linting rules
    "plugin:react/recommended", // uses react-specific linting rules
    "plugin:prettier/recommended", // enables eslint-plugin-prettier and eslint-config-prettier
    "prettier/react", // disables react-specific linting rules that conflict with prettier
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  "module",  // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
  },
  rules:  {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/interface-name-prefix": "always",
    "@typescript-eslint/no-explicit-any": "always",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/explicit-member-accessibility": 0,
    // "@typescript-eslint/member-delimiter-style": {
    //     delimiter: "none",
    //     requireLast: true,
    // },
  },
  plugins: [
    "react",
    "react-native",
  ],
  settings: {
    react: {
        version: "detect",
    },
},
  env: {
    "react-native/react-native": true
  }
};
