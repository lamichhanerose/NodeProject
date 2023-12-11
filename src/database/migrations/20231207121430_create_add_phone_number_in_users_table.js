/**
 * @param  {object} knex
 * @return {Promise}
 */

 const dbConst = require('../constants');

 exports.up = function(knex) {
   return knex.schema.table(dbConst.table_name.TBL_USERS, table => {
     table.string(dbConst.user_column.PHONE_NUMBER).notNull();
   });
 };
 
 /**
  * @param  {object} knex
  * @return {Promise}
  */
 exports.down = function(knex) {
   return knex.schema.table(dbConst.table_name.TBL_USERSS, table => {
     table.dropColumn(dbConst.user_column.PHONE_NUMBER);
   });
 };


