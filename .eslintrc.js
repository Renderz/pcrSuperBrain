const fabric = require('@umijs/fabric');

module.exports = {
    ...fabric.eslint,
    // extends: [...fabric.eslint.extends],
    rules: {
        ...fabric.eslint.rules,
        'import/no-named-as-default': 0,
        'react/self-closing-comp': 1,
        'jsx-a11y/media-has-caption': 0,
        'react-hooks/rules-of-hooks': "error",
        "react-hooks/exhaustive-deps": "warn"
    }
};
