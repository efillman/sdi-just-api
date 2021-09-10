// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Organization extends Model {

  static get tableName() {
    return 'organization';
  }

  static get idColumn() {
    return 'organization_id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['service_id', 'organization_short_name', 'organization_long_name'],

      properties: {
        service_id: { type: 'integer' },
        organization_short_name: { type: 'string' },
        organization_long_name: { type: 'string' },
        organization_echelon: { type: 'string' },
        organization_tactical: { type: 'boolean' },
        organization_operational: { type: 'boolean' },
        organization_strategic: { type: 'boolean' }
      }
    };
  }

  static get relationMappings() {
    const Services = require('./services.model');

    return {
      service: {
        relation: Model.HasOneRelation,
        modelClass: Services,
        join: {
          from: 'organization.service_id',
          to: 'services.service_id',
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
  return Organization;
};
