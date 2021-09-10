// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Contact extends Model {

  static get tableName() {
    return 'contact';
  }

  static get idColumn() {
    return 'contact_id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['system_id','contact_name', 'contact_email'],

      properties: {
        system_id: { type: 'integer' },
        contact_name: { type: 'string' },
        contact_email: { type: 'email' },
        contact_office_name: { type: 'string' },
        contact_office_purpose: { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    const System = require('./system.model');

    return {
      service: {
        relation: Model.HasOneRelation,
        modelClass: System,
        join: {
          from: 'contact.system_id',
          to: 'system.system_id',
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
  return Contact;
};
