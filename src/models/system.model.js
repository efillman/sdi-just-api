// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class System extends Model {

  static get tableName() {
    return 'system';
  }

  static get idColumn() {
    return 'system_id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['service_id', 'system_short_name', 'system_long_name'],

      properties: {
        service_id: { type: 'integer' },
        system_short_name: { type: 'string' },
        system_long_name: { type: 'string' },
        system_importance: { type: 'integer' },
        system_note: { type: 'string' }
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
  return System;
};
