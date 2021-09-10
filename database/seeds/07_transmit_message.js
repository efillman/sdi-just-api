
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('transmit_message').del()
    .then(function () {
      // Inserts seed entries
      return knex('transmit_message').insert([
        {compatibility_id: 1, message_id: 1},
        {compatibility_id: 1, message_id: 2},
        {compatibility_id: 1, message_id: 3}
      ]);
    });
};