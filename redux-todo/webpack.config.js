 var path = require('path');
    module.exports = {
        entry: './es6/state.js',
        output: {
            path: __dirname,
            filename: 'bundle.js'
        },
        module: {
            loaders: [
                { test: path.join(__dirname, 'es6'),
                  loader: 'babel-loader' }
            ]
        }
    };