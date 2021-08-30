const services = require('./services/services.service.js');
const system = require('./system/system.service.js');

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(services);
  app.configure(system);

};
