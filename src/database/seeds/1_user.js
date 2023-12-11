const dbConst = require('../constants');

exports.seed = function (knex) {
  // Deletes all existing entries
  return knex(dbConst.table_name.TBL_USERS)
    .del()
    .then(() => {
      // Inserts seed entries
      return knex(dbConst.table_name.TBL_USERS).insert([
        {
          id: 2,
          first_name: 'ROSE',
          last_name: 'LAMICHHANE',
          address: 'Bhotebahal',
          phone_number: '9876454545',
          email: 'rose@gmail.com',
          role_id: 1 
        },
        {
          id: 3,
          first_name: 'Puku',
          last_name: '',
          address: 'Bhotebahal',
          phone_number: '9876454541',
          email: 'ram@gmail.com',
          role_id: 2 
        },
        {
          id: 4,
          first_name: 'Sarita',
          last_name: 'Lamichhane',
          address: 'Bhotebahal',
          phone_number: '9876454545',
          email: 'sarita@gmail.com',
          role_id: 1 
        },
        {
          id: 5,
          first_name: 'Dragon',
          last_name: 'Knight',
          address: 'Radiant',
          phone_number: '9876454545',
          email: 'dk@gmail.com',
          role_id: 2 
        }
      ]);
    });
};
