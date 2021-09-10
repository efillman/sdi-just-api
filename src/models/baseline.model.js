// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection');

class Baseline extends Model {

  static get tableName() {
    return 'baseline';
  }

  static get idColumn() {
    return 'baseline_id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['baseline_name'],

      properties: {
        baseline_name: { type: 'string' }
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

  return Baseline;
};
