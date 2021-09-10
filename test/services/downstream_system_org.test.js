const app = require('../../src/app');

describe('\'downstream_system_org\' service', () => {
  it('registered the service', () => {
    const service = app.service('downstream-system-org');
    expect(service).toBeTruthy();
  });
});
