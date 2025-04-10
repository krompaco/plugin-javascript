import globals from "globals";

export default [{
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
        },

        ecmaVersion: "latest",
        sourceType: "module",
    },

    rules: {
        "no-console": "warn",
        "no-undef": "error",
        "no-unused-vars": ["warn", {
            vars: "all",
            args: "after-used",
            ignoreRestSiblings: false,
        }],
        semi: "off",
        quotes: "off",
        indent: "off",
        "comma-dangle": "off",
        "space-before-function-paren": "off",
    },
}];