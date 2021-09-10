const app = require('../../src/app');

describe('\'baseline\' service', () => {
  it('registered the service', () => {
    const service = app.service('baseline');
    expect(service).toBeTruthy();
  });
});
