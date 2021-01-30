const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, './src/index.js')],
  },
  output: {
    path: path.resolve(__dirname, outputDirectory),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                '@babel/plugin-proposal-object-rest-spread',
              ],
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: ['url-loader?limit=10000', 'img-loader'],
      },
      {
        test: /\.(css)$/,
        include: [path.resolve(__dirname, 'src'), path.resolve('node_modules/react-toastify/dist')],
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.woff2/i,
        include: path.resolve(__dirname, 'src') + '/font',
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: '[name].[ext]?[hash]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, outputDirectory),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Book',
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new CleanWebpackPlugin(),
  ],
};
