// Initializes the `baseline` service on path `/baseline`
const { Baseline } = require('./baseline.class');
const createModel = require('../../models/baseline.model');
const hooks = require('./baseline.hooks');

module.exports = function (app) {
  const options = {
    id: 'baseline_id',
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/baseline', new Baseline(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('baseline');

  service.hooks(hooks);
};
