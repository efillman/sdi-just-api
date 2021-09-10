// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class SystemOrganization extends Model {

  static get tableName() {
    return 'system_organization';
  }

  static get idColumn() {
    return 'system_organization_id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['system_id','organization_id'],

      properties: {
        system_id: { type: 'integer' },
        organization_id: { type: 'integer' },
      }
    };
  }

  static get relationMappings() {
    const System = require('./system.model');
    const Organization = require('./organization.model');

    return {
      system: {
        relation: Model.HasOneRelation,
        modelClass: System,
        join: {
          from: 'system_organization.system_id',
          to: 'system.system_id',
        },
      },
      organization: {
        relation: Model.HasOneRelation,
        modelClass: Organization,
        join: {
          from: 'system_organization.organization_id',
          to: 'organization.organization_id',
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
  return SystemOrganization;
};
