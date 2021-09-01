
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('services').del()
    .then(function () {
      // Inserts seed entries
      return knex('services').insert([
        { service_short_name: 'USA', service_long_name: 'United States Army' },
        { service_short_name: 'USMC', service_long_name: 'United States Marine Corps' },
        { service_short_name: 'USN', service_long_name: 'United States Navy' },
        { service_short_name: 'USAF', service_long_name: 'United States Air Force' },
        { service_short_name: 'USSF', service_long_name: 'United States Space Force' },
        { service_short_name: 'DOD', service_long_name: 'DOD Agencies/Activites' }
      ]);
    });
};