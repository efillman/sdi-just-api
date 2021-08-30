const app = require('../../src/app');

describe('\'book\' service', () => {
  it('registered the service', () => {
    const service = app.service('book');
    expect(service).toBeTruthy();
  });
});
