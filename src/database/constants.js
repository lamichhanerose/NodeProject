
const tableNames = {
  TBL_USERS: 'users',
  TBL_ROLES: 'roles'
};

const defaultCols = {
  CREATED_AT: 'created_at',
  UPDATED_AT: 'updated_at'
};

const userCols = {
  ID: 'id',
  FIRST_NAME: 'first_name',
  LAST_NAME: 'last_name',
  ADDRESS: 'address',
  EMAIL: 'email',
  PHONE_NUMBER: 'phone_number',
  ROLE_ID: 'role_id'
};

const roleCols = {
  TITLE: 'title',
  USER_ID: 'user_id'
};

module.exports = {
  table_name: tableNames,
  default_column: defaultCols,
  user_column: userCols,
  role_column: roleCols
};
