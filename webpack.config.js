const path = require('path')

// const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const DotENVWebpack = require('dotenv-webpack')
const { VueLoaderPlugin } = require('vue-loader')

require('dotenv').config()

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

function pathHelper(...pathArray) {
  return path.resolve(__dirname, ...pathArray)
}

module.exports = {
  target: 'web',

  entry: pathHelper('src/main.ts'),
  output: {
    path: pathHelper('dist'),
  },

  context: pathHelper('src'),
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      '@': pathHelper('src'),
      vue$: isDev ? 'vue/dist/vue.runtime.esm.js' : 'vue/dist/vue.esm.js',
    },
  },

  mode: process.env.NODE_ENV,
  devtool: isDev ? 'cheap-module-source-map' : false,
  devServer: {
    contentBase: pathHelper('dist'),
    writeToDisk: true,
    inline: true,
    hot: true,
  },
  optimization: {
    minimize: isProd,
    minimizer: [new TerserWebpackPlugin()],
  },

  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HTMLWebpackPlugin({ template: pathHelper('src/index.html') }),
    new MiniCSSExtractPlugin({ filename: 'styles.css' }),
    new DotENVWebpack(),
    new VueLoaderPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.pug$/,
        oneOf: [
          {
            resourceQuery: /^\?vue/,
            use: ['pug-plain-loader'],
          },
          {
            use: ['raw-loader', 'pug-plain-loader'],
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCSSExtractPlugin.loader,
          /*
            vue-style-loader is not alternative to style-loader,
            without which сss are not added to html
          */
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|png|gif|jpe?g)$/,
        type: 'asset/resource',
        generator: {
          filename: 'icons/[name][ext]',
        },
      },
      {
        test: /\.(ttf|eot|woff2?)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
}
