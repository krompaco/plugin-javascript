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
        "no-eval": "warn",
        "no-implied-eval": "warn",
        "no-new-func": "warn",
        "no-script-url": "warn",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-prototype-builtins": "warn",
        "no-unmodified-loop-condition": "error",
        "no-useless-concat": "warn",
        "no-useless-escape": "warn",
        "no-with": "warn",
        "require-await": "warn",
        "no-return-await": "warn",
        "eqeqeq": ["error", "always"],
    },
}];