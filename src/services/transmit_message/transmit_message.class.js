const { Service } = require('feathers-objection');

exports.TransmitMessage = class TransmitMessage extends Service {
  constructor(options) {
    const { Model, ...otherOptions } = options;

    super({
      ...otherOptions,
      model: Model
    });
  }
};
