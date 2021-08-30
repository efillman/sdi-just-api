const app = require('../../src/app');

describe('\'services\' service', () => {
  it('registered the service', () => {
    const service = app.service('services');
    expect(service).toBeTruthy();
  });
});
