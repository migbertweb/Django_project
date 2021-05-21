const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

const prod = process.env.NODE_ENV === 'production';

const config = {
  entry: {
    app: './src/js/app'
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].[chunkhash:3].js',
    path: path.resolve('./static')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app'),
    watchContentBase: true,
    writeToDisk: true,
    open: true
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'esbuild-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false } },
          "postcss-loader",
        ],
      },
    ],
  },
  optimization: {
    minimize: prod,
    minimizer: [
      new ESBuildMinifyPlugin({
        css: true
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    // new CopyPlugin({ patterns: [{ from: 'src/index.html', to: '../views/pages/index.html' }] })
  ],
  mode: prod ? 'production' : 'development'
};

module.exports = config;