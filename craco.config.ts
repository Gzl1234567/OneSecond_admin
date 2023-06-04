/* eslint-disable import/no-import-module-exports */
import path from 'path'

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.121.66.8888',
        pathRewrite: { '^/api': '' }
      }
    }
  },
  webpack: {
    alias: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      '@': path.resolve(__dirname, 'src')
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: '@svgr/webpack',
              options: {
                icon: true
              }
            },
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext]',
                outputPath: 'assets/svg'
              }
            }
          ]
        }
      ]
    },
    plugins: {
      add: [
        /* ... */
      ],
      remove: [
        /* ... */
      ]
    }
  }
}
