module.exports = {
    env: {
        es6: true
    },
    rules: {
        'import/no-extraneous-dependencies': ['error', {
            'devDependencies': true
        }],
        'import/prefer-default-export': 'off'

    },
};
