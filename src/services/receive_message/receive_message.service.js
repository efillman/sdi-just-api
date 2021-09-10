// Initializes the `receive_message` service on path `/receive-message`
const { ReceiveMessage } = require('./receive_message.class');
const createModel = require('../../models/receive_message.model');
const hooks = require('./receive_message.hooks');

module.exports = function (app) {
  const options = {
    id: 'receive_message_id',
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$eager"],
    allowedEager: "[message]",
  };

  // Initialize our service with any options it requires
  app.use('/receive-message', new ReceiveMessage(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('receive-message');

  service.hooks(hooks);
};
