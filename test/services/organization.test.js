const app = require('../../src/app');

describe('\'organization\' service', () => {
  it('registered the service', () => {
    const service = app.service('organization');
    expect(service).toBeTruthy();
  });
});
