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

describe('\'services\' service', () => {
  let server;

  beforeAll(done => {
    server = app.listen(port);
    server.once('listening', () => done());
  });

  afterAll(done => {
    server.close(done);
  });

  it('registered the service', () => {
    const service = app.service('services');
    expect(service).toBeTruthy();
  });

  it('starts and shows the index page', async () => {
    expect.assertions(1);

    const { data } = await axios.get(getUrl('services'));
    console.log(data);
    expect(data['limit']).toBe(10);
  });
});
