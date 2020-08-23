module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb-base",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "no-restricted-syntax": "off",
        "guard-for-in": "off",
        "no-plusplus": "off",
        "no-loop-func": "off",
        "no-lonely-if": "off"
    }
};