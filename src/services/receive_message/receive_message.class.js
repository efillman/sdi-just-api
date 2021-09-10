const { Service } = require('feathers-objection');

exports.ReceiveMessage = class ReceiveMessage extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
