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
        "no-debugger": "warn",
        "no-unreachable": "warn",
        "no-undef": "warn",
        "no-unmodified-loop-condition": "warn",
        "no-useless-concat": "warn",
        "no-useless-escape": "warn",
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