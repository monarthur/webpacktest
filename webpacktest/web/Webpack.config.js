module.exports = {
    entry: './js/src/main.js',
    output: {
        filename: './js/common.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
          {
              test: [/\.js$/, /\.jsx$/],
              exclude: /node_modules/,
              loader: 'babel',
              query: {
                  presets: ['es2015', 'stage-0', 'react']
              }
          }
        ]
    }
}