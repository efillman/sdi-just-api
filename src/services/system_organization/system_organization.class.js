const { Service } = require('feathers-objection');

exports.SystemOrganization = class SystemOrganization extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
