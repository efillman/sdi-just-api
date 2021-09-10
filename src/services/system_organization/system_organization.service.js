// Initializes the `system_organization` service on path `/system-organization`
const { SystemOrganization } = require('./system_organization.class');
const createModel = require('../../models/system_organization.model');
const hooks = require('./system_organization.hooks');

module.exports = function (app) {
  const options = {
    id: 'system_organization_id',
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$eager"],
    allowedEager: "[system, organization]",
  };

  // Initialize our service with any options it requires
  app.use('/system-organization', new SystemOrganization(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('system-organization');

  service.hooks(hooks);
};
