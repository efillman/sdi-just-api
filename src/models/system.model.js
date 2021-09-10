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

  static get relationMappings() {
    const Services = require('./services.model');
    const Contact = require('./contact.model');
    const Compatibility = require('./compatibility.model');
    const SystemOrganization = require('./system_organization.model');
    const UpstreamSystemOrg = require('./upstream_system_org.model');
    const DownstreamSystemOrg = require('./downstream_system_org.model');

    return {
      service: {
        relation: Model.HasOneRelation,
        modelClass: Services,
        join: {
          from: 'system.service_id',
          to: 'services.service_id',
        },
      },
      contact: {
        relation: Model.HasManyRelation,
        modelClass: Contact,
        join: {
          from: 'system.system_id',
          to: 'contact.system_id',
        },
      },
      compatibility: {
        relation: Model.HasManyRelation,
        modelClass: Compatibility,
        join: {
          from: 'system.system_id',
          to: 'compatibility.system_id',
        },
      },
      system_organization: {
        relation: Model.HasManyRelation,
        modelClass: SystemOrganization,
        join: {
          from: 'system.system_id',
          to: 'system_organization.system_id',
        },
      },
      upstream_system_org: {
        relation: Model.HasManyRelation,
        modelClass: UpstreamSystemOrg,
        join: {
          from: 'system.system_id',
          to: 'upstream_system_org.system_id',
        },
      },
      downstream_system_org: {
        relation: Model.HasManyRelation,
        modelClass: DownstreamSystemOrg,
        join: {
          from: 'system.system_id',
          to: 'downstream_system_org.system_id',
        },
      },
    };
  }

  static get modifiers() {
    return {
      orderByImportance(builder) {
        builder.orderBy('system_importance')
      }
    }
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
