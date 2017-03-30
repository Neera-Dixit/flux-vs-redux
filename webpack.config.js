var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var clientBuildPath = path.resolve(__dirname, 'public', 'build');
var clientMainPath = path.resolve(__dirname, 'src','components','index.js');


 module.exports = {
         name : 'client',
         target : 'web',
         entry:  [
                    clientMainPath
                ],
         output: {
             path: clientBuildPath,
             publicPath: "public/build",
             filename: 'bundleclient.js'
         },
         module: {
             loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
         }]
        },
        devServer: {
            //contentBase: "./src/views"
        }
    };