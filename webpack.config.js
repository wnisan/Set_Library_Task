const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin'); // сжатие

module.exports = {
  entry: './set-library-test.ts',
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'set-library-webpack.js', 
    clean: true, // очистка папки перед сборкой
  },
  
  mode: 'development',
  
  module: {
    rules: [
      {
        test: /\.ts$/, 
        use: 'ts-loader',
        exclude: /node_modules/, // исключаем из обработки
      },
    ],
  },
  
  resolve: {
    extensions: ['.ts', '.js'], 
  },
  
  plugins: [

    new HtmlWebpackPlugin({
      title: 'Set Library Test',
      template: './index.html',
    }),
  
    new CompressionPlugin({
      algorithm: 'gzip', // GZIP сжатие
    }),
    ],

  devServer: {
    static: './dist',
    port: 3000,
    open: true,
  },
};