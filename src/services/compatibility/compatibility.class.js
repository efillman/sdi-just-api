const { Service } = require('feathers-objection');

exports.Compatibility = class Compatibility extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
