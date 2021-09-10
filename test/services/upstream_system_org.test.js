const app = require('../../src/app');

describe('\'upstream_system_org\' service', () => {
  it('registered the service', () => {
    const service = app.service('upstream-system-org');
    expect(service).toBeTruthy();
  });
});
