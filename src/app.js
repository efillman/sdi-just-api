const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./logger');
const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');
const objection = require('./objection');

const app = express(feathers());

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing


app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());

console.log('node_env', process.env.NODE_ENV);
if (process.env.NODE_ENV === undefined) {
const sdiconnection = {
  client: 'pg',
  connection: `postgresql://${process.env.PG_USER}:${process.env.APP_DB_ADMIN_PASSWORD}@${process.env.PGHOST}:${process.env.PGPORT}/${process.env.PG_DATABASE}`,
  migrations: {
    directory: './database/migrations',
    tableName: 'knex_migrations'
  },
  seeds: { directory: './database/seeds' }
}
app.set('sdiconnection', sdiconnection);
console.log('dev data string', sdiconnection);
} else {
  //then process.env.NODE_ENV === 'development' most likley
  app.set('sdiconnection', app.get('postgres'));
  console.log('dev prod local string', app.get('postgres'));
}

app.configure(objection);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));
//app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

app.hooks(appHooks);


module.exports = app;
