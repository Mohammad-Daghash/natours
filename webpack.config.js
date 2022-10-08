const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, './public/js/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: '[name].js',
    },
};
