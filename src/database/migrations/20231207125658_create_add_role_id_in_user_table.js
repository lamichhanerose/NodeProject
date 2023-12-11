/**
 * @param  {object} knex
 * @return {Promise}
 */

const dbConst = require("../constants");

exports.up = function(knex) {
  return knex.schema.table(dbConst.table_name.TBL_USERS, (table) => {
    table.integer(dbConst.user_column.ROLE_ID).notNull();
    table
      .foreign(dbConst.user_column.ROLE_ID)
      .references(`${dbConst.table_name.TBL_ROLES}.role_id`);
  });
};

/**
 * @param  {object} knex
 * @return {Promise}
 */
exports.down = function(knex) {
  return knex.schema.table(dbConst.table_name.TBL_USERSS, (table) => {
    table.dropColumn(dbConst.user_column.PHONE_NUMBER);
  });
};
