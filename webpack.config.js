// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // 1. Archivo de entrada JS (importará nuestro CSS)
  entry: './src/main.js',

  // 2. Dónde saldrá el código compilado
  output: {
    filename: 'bundle.[contenthash].js', // JS minificado
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Limpia la carpeta 'dist' antes de cada build
  },

  // 3. Módulos para procesar CSS
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  // 4. Plugins
  plugins: [
    // Plugin para generar 'index.html' en 'dist'
    new HtmlWebpackPlugin({
      template: './src/index.html', // Plantilla
      filename: 'index.html',     // Archivo de salida
      chunks: ['main'],           // Inyecta el JS
    }),
    // Plugin para generar 'personajes.html' en 'dist'
    new HtmlWebpackPlugin({
      template: './src/personajes.html',
      filename: 'personajes.html',
      chunks: ['main'],
    }),
    // Plugin para extraer el CSS en un archivo separado
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css', // CSS minificado
    }),
  ],

  // 5. Optimización (Aqui ocurre la minificación)
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(), // Minificador de CSS
      '...', // Mantiene los minificadores por defecto (para JS)
    ],
  },
};