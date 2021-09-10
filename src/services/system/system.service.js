// Initializes the `system` service on path `/system`
const { System } = require('./system.class');
const createModel = require('../../models/system.model');
const hooks = require('./system.hooks');

module.exports = function (app) {
  const options = {
    id: 'system_id',
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$eager"],
    allowedEager: "[service, contact, compatibility.[baseline, transmit.[message], receive.[message]], system_organization.[organization], upstream_system_org.[system_organization.[organization]], downstream_system_org.[system_organization.[organization]]]",
  };

  // Initialize our service with any options it requires
  app.use('/system', new System(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('system');

  service.hooks(hooks);
};
