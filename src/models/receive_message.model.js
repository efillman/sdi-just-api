// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class ReceiveMessage extends Model {

  static get tableName() {
    return 'receive_message';
  }

  static get idColumn() {
    return 'receive_message_id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['compatibility_id', 'message_id'],

      properties: {
        compatibility_id: { type: 'integer' },
        message_id: { type: 'integer' }
      }
    };
  }

  static get relationMappings() {
    const Compatibility = require('./compatibility.model');
    const Message = require('./message.model');

    return {
      compatibility: {
        relation: Model.HasOneRelation,
        modelClass: Compatibility,
        join: {
          from: 'receive_message.compatibility_id',
          to: 'compatiblity.compatibility_id',
        },
      },
      message: {
        relation: Model.HasOneRelation,
        modelClass: Message,
        join: {
          from: 'receive_message.message_id',
          to: 'message.message_id',
        },
      }
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
  return ReceiveMessage;
};
