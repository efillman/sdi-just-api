const { Service } = require('feathers-objection');

exports.Baseline = class Baseline extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
