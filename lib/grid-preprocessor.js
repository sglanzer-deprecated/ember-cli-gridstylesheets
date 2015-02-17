var concatenate = require('broccoli-concat');
var mergeTrees  = require('broccoli-merge-trees');

function GridPreprocessor(applicationName) {
  this.name = 'ember-cli-gridstylesheets';
  this.applicationName = applicationName;
  this.ext = 'gss';
}

GridPreprocessor.prototype.toTree = function(tree, inputPath, outputPath) {
  var outputFileName = outputPath + '/' + this.applicationName + '.gss';

  var gridStyles = concatenate(tree, {
    inputFiles: [inputPath.substr(1) + '/**/*.gss'],
    outputFile: outputFileName
  });
  
  return mergeTrees([tree, gridStyles]);
};

module.exports = GridPreprocessor;