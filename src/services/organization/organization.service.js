// Initializes the `organization` service on path `/organization`
const { Organization } = require('./organization.class');
const createModel = require('../../models/organization.model');
const hooks = require('./organization.hooks');

module.exports = function (app) {
  const options = {
    id: 'organization_id',
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$eager"],
    allowedEager: "[service]",
  };

  // Initialize our service with any options it requires
  app.use('/organization', new Organization(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('organization');

  service.hooks(hooks);
};
