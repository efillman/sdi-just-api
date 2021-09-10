// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class UpstreamSystemOrg extends Model {

  static get tableName() {
    return 'upstream_system_org';
  }

  static get idColumn() {
    return 'upstream_id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['system_id','system_organization_id'],

      properties: {
        system_id: { type: 'integer' },
        system_organization_id: { type: 'integer' },
      }
    };
  }

  static get relationMappings() {
    const System = require('./system.model');
    const SystemOrganization = require('./system_organization.model');

    return {
      system: {
        relation: Model.HasOneRelation,
        modelClass: System,
        join: {
          from: 'upstream_system_org.system_id',
          to: 'system.system_id',
        },
      },
      system_organization: {
        relation: Model.HasOneRelation,
        modelClass: SystemOrganization,
        join: {
          from: 'upstream_system_org.system_organization_id',
          to: 'system_organization.system_organization_id',
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
  return UpstreamSystemOrg;
};
