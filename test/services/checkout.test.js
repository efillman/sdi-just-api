const app = require('../../src/app');

describe('\'checkout\' service', () => {
  it('registered the service', () => {
    const service = app.service('checkout');
    expect(service).toBeTruthy();
  });
});
