

module.exports = {
  before: {
    all: [],
    find: [
      async (context) => {
        const query = {
          $select: ['*'],
          $eager: "[service]",
        };

        context.params.query = { ...context.params.query, ...query };
        return context;
      }
    ],
    get: [
      async (context) => {
        const query = {
          $select: ['*'],
          $eager: "[service]",
        };

        context.params.query = { ...context.params.query, ...query };
        return context;
      }
    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
