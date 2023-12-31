const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },

  devServer: {
    inline: true,
    historyApiFallback: true,
    contentBase: './public',
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    port: 8080
  }
})
