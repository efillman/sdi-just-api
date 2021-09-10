// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Message extends Model {

  static get tableName() {
    return 'message';
  }

  static get idColumn() {
    return 'message_id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['message_designator', 'message_short_name', 'message_long_name'],

      properties: {
        message_designator: { type: 'string' },
        message_short_name: { type: 'string' },
        message_long_name: { type: 'string' }
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

  return Message;
};
