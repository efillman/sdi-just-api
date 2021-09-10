// Initializes the `transmit_message` service on path `/transmit-message`
const { TransmitMessage } = require('./transmit_message.class');
const createModel = require('../../models/transmit_message.model');
const hooks = require('./transmit_message.hooks');

module.exports = function (app) {
  const options = {
    id: 'transmit_message_id',
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$eager"],
    allowedEager: "[message]",
  };

  // Initialize our service with any options it requires
  app.use('/transmit-message', new TransmitMessage(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('transmit-message');

  service.hooks(hooks);
};
