const app = require('../../src/app');

describe('\'system_organization\' service', () => {
  it('registered the service', () => {
    const service = app.service('system-organization');
    expect(service).toBeTruthy();
  });
});
