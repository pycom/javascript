module.exports = {
    extends: [
        './rules/airbnb',
        './rules/best-practices',
        './rules/errors',
        './rules/node',
        './rules/style',
        './rules/variables',
        './rules/es6',
        './rules/imports',
    ].map(require.resolve),
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
};
