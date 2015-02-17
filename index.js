/* jshint node: true */
'use strict';

var GridPreprocessor = require('./lib/grid-preprocessor');

module.exports = {
  name: 'ember-cli-gridstylesheets',

  included: function(app) {
    this.app = app;
    
    this._super.included(app);

    app.import(app.bowerDirectory + '/gss/dist/gss.js');
    
    app.registry.add('css', new GridPreprocessor(app.name));
  },
  
  contentFor: function(type, config) {
    if (type === "head") {
      // Empty script tag fixes a bug in GSS 2.0.0
      return '<link rel="stylesheet" type="text/gss" href="assets/' + this.app.name + '.gss"></link><script src="gss"></script>'
    }
  }
};
