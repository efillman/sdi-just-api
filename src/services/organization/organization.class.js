const { Service } = require('feathers-objection');

exports.Organization = class Organization extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
