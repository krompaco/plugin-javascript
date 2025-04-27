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
        "no-eval": "error",
        "no-implied-eval": "error",
        "no-new-func": "warn",
        "no-script-url": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-prototype-builtins": "warn",
        "no-with": "warn",
        "require-await": "warn",
        "eqeqeq": ["error", "always"],
    },
}];