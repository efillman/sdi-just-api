
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('system').del()
    .then(function () {
      // Inserts seed entries
      return knex('system').insert([
        {service_id: 1, system_short_name: 'TAIS', system_long_name: 'Tactical Air Integration System', system_importance: 9999, system_note: 'We gotchu'},
        {service_id: 1, system_short_name: 'AFATDS', system_long_name: 'Advanced Field Artillery Tactical Data System', system_importance: 100, system_note: 'yea!'},
        {service_id: 2, system_short_name: 'TBMCS', system_long_name: 'Theater Battle Management Core System', system_importance: 0, system_note: 'booo'},
        {service_id: 2, system_short_name: 'AFATDS', system_long_name: 'Advanced Field Artillery Tactical Data System', system_importance: 0, system_note: 'marines!'},
        {service_id: 3, system_short_name: 'TBMCS', system_long_name: 'Theater Battle Management Core System', system_importance: 0, system_note: 'booo'},
        {service_id: 3, system_short_name: 'AFATDS', system_long_name: 'Advanced Field Artillery Tactical Data System', system_importance: 0, system_note: 'marines!'},
        {service_id: 4, system_short_name: 'TBMCS', system_long_name: 'Theater Battle Management Core System', system_importance: 0, system_note: 'booo'},
      ]);
    });
};
