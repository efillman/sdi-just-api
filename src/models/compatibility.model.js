// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Compatibility extends Model {

  static get tableName() {
    return 'compatibility';
  }

  static get idColumn() {
    return 'compatibility_id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['baseline_id', 'system_id'],

      properties: {
        baseline_id: { type: 'integer' },
        system_id: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    const System = require('./system.model');
    const Baseline = require('./baseline.model');
    const ReceiveMessage = require('./receive_message.model');
    const TransmitMessage = require('./transmit_message.model');

    return {
      system: {
        relation: Model.HasOneRelation,
        modelClass: System,
        join: {
          from: 'compatibility.system_id',
          to: 'system.system_id',
        },
      },
      baseline: {
        relation: Model.HasOneRelation,
        modelClass: Baseline,
        join: {
          from: 'compatibility.baseline_id',
          to: 'baseline.baseline_id',
        },
      },
      transmit: {
        relation: Model.HasManyRelation,
        modelClass: TransmitMessage,
        join: {
          from: 'compatibility.compatibility_id',
          to: 'transmit_message.compatibility_id',
        },
      },
      receive: {
        relation: Model.HasManyRelation,
        modelClass: ReceiveMessage,
        join: {
          from: 'compatibility.compatibility_id',
          to: 'receive_message.compatibility_id',
        },
      },
    };
  }


  $beforeInsert() {
    this.created_at = this.updated_at = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}

module.exports = function () {

  return Compatibility;
};
