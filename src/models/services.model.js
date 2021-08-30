// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Services extends Model {

  static get tableName() {
    return 'services';
  }

  static get idColumn() {
    return 'service_id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['service_short_name', 'service_long_name'],

      properties: {
        service_short_name: { type: 'string' },
        service_long_name: { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    const System = require('./system.model');

    return {
      system: {
        relation: Model.HasManyRelation,
        modelClass: System,
        join: {
          from: 'services.service_id',
          to: 'system.service_id',
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
  return Services;
};
