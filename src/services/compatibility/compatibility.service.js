// Initializes the `compatibility` service on path `/compatibility`
const { Compatibility } = require('./compatibility.class');
const createModel = require('../../models/compatibility.model');
const hooks = require('./compatibility.hooks');

module.exports = function (app) {
  const options = {
    id: 'compatibility_id',
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$eager"],
    allowedEager: "[system, baseline, transmit, receive]",
  };

  // Initialize our service with any options it requires
  app.use('/compatibility', new Compatibility(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('compatibility');

  service.hooks(hooks);
};
