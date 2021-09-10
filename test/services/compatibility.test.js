const app = require('../../src/app');

describe('\'compatibility\' service', () => {
  it('registered the service', () => {
    const service = app.service('compatibility');
    expect(service).toBeTruthy();
  });
});
