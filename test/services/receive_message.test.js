const app = require('../../src/app');

describe('\'receive_message\' service', () => {
  it('registered the service', () => {
    const service = app.service('receive-message');
    expect(service).toBeTruthy();
  });
});
