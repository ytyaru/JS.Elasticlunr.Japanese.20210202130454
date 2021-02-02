//const fs = require('fs');
const glob = require('glob');

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'backend.js'
  },
  externals: nodeModules
}

export default class FileSearcher {
    static gets(path='./content/**/*') {
        /*
        fs.readdir(path, (err, files) => {
            return files;
        });
        */
        glob(path, (err, files) => {
            return files;
        });
    }
}
