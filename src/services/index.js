const services = require('./services/services.service.js');
const system = require('./system/system.service.js');

const contact = require('./contact/contact.service.js');

const baseline = require('./baseline/baseline.service.js');

const compatibility = require('./compatibility/compatibility.service.js');

const message = require('./message/message.service.js');

const transmitMessage = require('./transmit_message/transmit_message.service.js');

const receiveMessage = require('./receive_message/receive_message.service.js');

const organization = require('./organization/organization.service.js');
const systemOrganization = require('./system_organization/system_organization.service.js');
const upstreamSystemOrg = require('./upstream_system_org/upstream_system_org.service.js');
const downstreamSystemOrg = require('./downstream_system_org/downstream_system_org.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(services);
  app.configure(system);

  app.configure(contact);
  app.configure(baseline);
  app.configure(compatibility);
  app.configure(message);
  app.configure(transmitMessage);
  app.configure(receiveMessage);
  app.configure(organization);
  app.configure(systemOrganization);
  app.configure(upstreamSystemOrg);
  app.configure(downstreamSystemOrg);
};
