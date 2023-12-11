/**
 * @param  {object} knex
 * @return {Promise}
 */

 const dbConst = require('../constants');

 exports.up = function(knex) {
   return knex.schema.createTable(dbConst.table_name.TBL_USERS, table => {
     table.increments(dbConst.user_column.ID);
     table.string(dbConst.user_column.FIRST_NAME).notNull();
     table.string(dbConst.user_column.LAST_NAME).notNull();
     table.string(dbConst.user_column.EMAIL).notNull();
     table.string(dbConst.user_column.ADDRESS).notNull();
     table
       .timestamp(dbConst.default_column.CREATED_AT)
       .notNull()
       .defaultTo(knex.raw('now()'));
 
     table.timestamp(dbConst.default_column.UPDATED_AT);
   });
 };
 
 /**
  * @param  {object} knex
  * @return {Promise}
  */
 exports.down = function(knex) {
   return knex.schema.dropTable(dbConst.table_name.TBL_USERS);
 };