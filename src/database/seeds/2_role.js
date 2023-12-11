/**
 * @param  {object} knex
 * @param  {object} Promise
 * @return {Promise}
 */

 const dbConst = require('../constants');
 exports.seed = function (knex) {
  // Deletes all existing entries
  return knex(dbConst.table_name.TBL_ROLES) 
    // .del()
    .then(() => {
      // Inserts seed entries
      return knex(dbConst.table_name.TBL_ROLES).insert([
        {
             title: 'Manager'
           },
           {
            title: 'Staff',
          }
        ]);
      });
  };
  