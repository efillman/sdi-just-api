// Initializes the `downstream_system_org` service on path `/downstream-system-org`
const { DownstreamSystemOrg } = require('./downstream_system_org.class');
const createModel = require('../../models/downstream_system_org.model');
const hooks = require('./downstream_system_org.hooks');

module.exports = function (app) {
  const options = {
    id: 'downstream_id',
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/downstream-system-org', new DownstreamSystemOrg(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('downstream-system-org');

  service.hooks(hooks);
};
