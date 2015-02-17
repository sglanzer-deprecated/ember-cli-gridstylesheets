export function initialize(container, application) {
  var gss_engine = new GSS(document);

  application.register('gss-engine:main', gss_engine, {instantiate: false});
  
  // Defer so that there's no initial 'blip' when GSS is applied
  application.deferReadiness();
  gss_engine.once('flush', function () {
    application.advanceReadiness();
  });
}

export default {
  name: 'ember-cli-gridstylesheets',
  initialize: initialize
};
