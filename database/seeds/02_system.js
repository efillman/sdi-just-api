
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('system').del()
    .then(function () {
      // Inserts seed entries
      return knex('system').insert([
        { service_id: 1, system_short_name: 'GCCS-A', system_long_name: 'Global Command and Control System–Army', system_importance: 1, system_note: 'Note' },
        { service_id: 1, system_short_name: 'TAIS', system_long_name: 'Tactical Airspace Integration System', system_importance: 2, system_note: 'Note' },
        { service_id: 1, system_short_name: 'JADOCS', system_long_name: 'Joint Automated Deep Operations Coordination System', system_importance: 3, system_note: 'Note' },
        { service_id: 1, system_short_name: 'AFATDS', system_long_name: 'Advanced Field Artillery Tactical Data System', system_importance: 4, system_note: 'Note' },
        { service_id: 1, system_short_name: 'DCGS-A', system_long_name: 'Distributed Common Ground System–Army', system_importance: 5, system_note: 'Note' },
        { service_id: 1, system_short_name: 'ADSI', system_long_name: 'Air Defense System Integrator', system_importance: 6, system_note: 'Note' },
        { service_id: 1, system_short_name: 'MCIS', system_long_name: 'Mission Command Information Systems', system_importance: 7, system_note: 'Note' },
        { service_id: 1, system_short_name: 'CPCE', system_long_name: 'Command Post Computing Environment', system_importance: 8, system_note: 'Note' },
        { service_id: 1, system_short_name: 'AMPS', system_long_name: 'Army Mission Planning System', system_importance: 9, system_note: 'Note' },
        { service_id: 1, system_short_name: 'AMDWS', system_long_name: 'Air and Missile Defense Workstation', system_importance: 10, system_note: 'Note' },
        { service_id: 2, system_short_name: 'GCCS-TCO', system_long_name: 'Global Combat and Control System Tactical Combat Operations', system_importance: 1, system_note: 'Note' },
        { service_id: 2, system_short_name: 'TBMCS', system_long_name: 'Theater Battle Management Core System', system_importance: 2, system_note: 'Note' },
        { service_id: 2, system_short_name: 'JADOCS', system_long_name: 'Joint Automated Deep Operations Coordination System', system_importance: 3, system_note: 'Note' },
        { service_id: 2, system_short_name: 'AFATDS', system_long_name: 'Advanced Field Artillery Tactical Data System', system_importance: 4, system_note: 'Note' },
        { service_id: 2, system_short_name: 'JMPS', system_long_name: 'Joint Mission Planning System', system_importance: 5, system_note: 'Note' },
        { service_id: 2, system_short_name: 'ADSI', system_long_name: 'Air Defense System Integrator', system_importance: 6, system_note: 'Note' },
        { service_id: 2, system_short_name: 'JTCW', system_long_name: 'Joint Tactical Common Operational Picture Workstation', system_importance: 7, system_note: 'Note' },
        { service_id: 2, system_short_name: 'CAC2S', system_long_name: 'Common Aviation Command & Control System', system_importance: 8, system_note: 'Note' },
        { service_id: 2, system_short_name: 'JRE', system_long_name: 'Unknown Acroynm', system_importance: 9, system_note: 'Note' },
        { service_id: 3, system_short_name: 'GCCS-M', system_long_name: 'Global Command and Control System–Maritime', system_importance: 1, system_note: 'Note' },
        { service_id: 3, system_short_name: 'TBMCS', system_long_name: 'Theater Battle Management Core System', system_importance: 2, system_note: 'Note' },
        { service_id: 3, system_short_name: 'JADOCS', system_long_name: 'Joint Automated Deep Operations Coordination System', system_importance: 3, system_note: 'Note' },
        { service_id: 3, system_short_name: 'AFATDS', system_long_name: 'Advanced Field Artillery Tactical Data System', system_importance: 4, system_note: 'Note' },
        { service_id: 3, system_short_name: 'JMPS', system_long_name: 'Joint Mission Planning System', system_importance: 5, system_note: 'Note' },
        { service_id: 3, system_short_name: 'ADSI', system_long_name: 'Air Defense System Integrator', system_importance: 6, system_note: 'Note' },
        { service_id: 3, system_short_name: 'CAC2S (afloat)', system_long_name: 'Common Aviation Command & Control System', system_importance: 8, system_note: 'Note' },
        { service_id: 4, system_short_name: 'GCCS-AF', system_long_name: 'Global Command and Control System–Air Force', system_importance: 1, system_note: 'Note' },
        { service_id: 4, system_short_name: 'TBMCS', system_long_name: 'Theater Battle Management Core System', system_importance: 2, system_note: 'Note' },
        { service_id: 4, system_short_name: 'JADOCS', system_long_name: 'Joint Automated Deep Operations Coordination System', system_importance: 3, system_note: 'Note' },
        { service_id: 4, system_short_name: 'AOC-WS BL20 (KRADOS)', system_long_name: 'Air Operations Center Weapon System Block 20', system_importance: 4, system_note: 'Note' },
        { service_id: 4, system_short_name: 'DCGS-AF', system_long_name: 'Air Force Distributed Common Ground System', system_importance: 5, system_note: 'Note' },
        { service_id: 4, system_short_name: 'ADSI', system_long_name: 'Air Defense System Integrator', system_importance: 6, system_note: 'Note' },
        { service_id: 5, system_short_name: 'TBMCS', system_long_name: 'Theater Battle Management Core System', system_importance: 1, system_note: 'Note' },
        { service_id: 6, system_short_name: 'GCCS-J', system_long_name: 'Global Command and Control System Joint', system_importance: 1, system_note: 'Note' },
        { service_id: 6, system_short_name: 'GCCS-J I3', system_long_name: 'Global Command and Control System Joint I3', system_importance: 2, system_note: 'Note' }
      ]);
    });
};
