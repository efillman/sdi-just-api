const { Service } = require('feathers-objection');

exports.DownstreamSystemOrg = class DownstreamSystemOrg extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
