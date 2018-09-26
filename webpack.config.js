const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');

module.exports = {
    entry : "./main.js",
    output:{
      path :"/",
      filename: '[name].bundle.js',
      chunkFilename: '[name].js',
      publicPath: '/'
    },
    devServer:{
      inline:true,
      port: 8001,
      host: '127.0.0.1',
      historyApiFallback: true
    },

    module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }, {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: "babel-loader"
        }


    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: true
    })
    
  ],
   optimization: {
    occurrenceOrder: true,
    splitChunks: {
        cacheGroups: {
            default: false,
            vendors: false,
            vendor: {
                // async + async chunks
                chunks: 'all',
                // import file path containing node_modules
                test: /node_modules/
            }
        }
    },
    minimizer: [
     new UglifyJsPlugin({ 
         
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true,
          warnings:false,
        
            output: {
                comments: false,
            },
        },
        sourceMap: true
         
     })
    ],
    removeAvailableModules: true
  },
mode: 'production'

};
