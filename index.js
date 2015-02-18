/* jshint node: true */
'use strict';

var GridPreprocessor = require('./lib/grid-preprocessor');
var versionChecker = require('ember-cli-version-checker');

module.exports = {
  name: 'ember-cli-gridstylesheets',
  
  setupProcessorRegistry: function (type, registry) {
    registry.add('css', new GridPreprocessor(this.app.name));
  },

  included: function(app) {
    this.app = app;
    
    app.import(app.bowerDirectory + '/gss/dist/gss.js');
    
    if (!versionChecker.isAbove('0.2.0')) {
      this.setupProcessorRegistry('parent', app.registry);
    }
  },
  
  contentFor: function(type, config) {
    if (type === "head") {
      // Empty script tag works around a bug in GSS 2.0.0
      return '<link rel="stylesheet" type="text/gss" href="assets/' + this.app.name + '.gss"></link><script src="gss"></script>'
    }
  }
};
