// Initializes the `upstream_system_org` service on path `/upstream-system-org`
const { UpstreamSystemOrg } = require('./upstream_system_org.class');
const createModel = require('../../models/upstream_system_org.model');
const hooks = require('./upstream_system_org.hooks');

module.exports = function (app) {
  const options = {
    id: 'upstream_id',
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/upstream-system-org', new UpstreamSystemOrg(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('upstream-system-org');

  service.hooks(hooks);
};
