const app = require('../../src/app');

describe('\'system\' service', () => {
  it('registered the service', () => {
    const service = app.service('system');
    expect(service).toBeTruthy();
  });
});