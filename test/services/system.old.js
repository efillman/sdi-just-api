const axios = require('axios');
const url = require('url');
const app = require('../../src/app');

const port = app.get('port') || 8998;
const getUrl = pathname => url.format({
  hostname: app.get('host') || 'localhost',
  protocol: 'http',
  port,
  pathname
});

describe('\'system\' service', () => {
  let server;

  beforeAll(done => {
    server = app.listen(port);
    server.once('listening', () => done());
  });

  afterAll(done => {
    server.close(done);
  });

  it('registered the service', () => {
    const service = app.service('system');
    expect(service).toBeTruthy();
  });

  it('starts and returns the system endpoint', async () => {
    expect.assertions(1);

    const { data } = await axios.get(getUrl('system'));

    expect(data['limit']).toBe(10);
  });
});
