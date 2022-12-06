const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/main.js', // точка входа
  output: { // место размещения итогового файла
    filename: 'bundle.js', // имя файла
    path: path.resolve(__dirname,'build'), // путь. текущая директория/build
    clean: true,
  },
  devtools: 'source-map',
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public' }],
    }),
  ],
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: ['babel-loader']
        }
    ]
  }
}
