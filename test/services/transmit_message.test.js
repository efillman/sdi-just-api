const app = require('../../src/app');

describe('\'transmit_message\' service', () => {
  it('registered the service', () => {
    const service = app.service('transmit-message');
    expect(service).toBeTruthy();
  });
});
