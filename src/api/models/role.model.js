import { Model } from 'objection';
import dbConst from '../../database/constants';


export default class Role extends Model {
  static get tableName() {
    return dbConst.table_name.TBL_ROLES;
  }

  static get idColumn() {
    return 'role_id'; 
  }

  static get hasTimestamps() {
    return true;
  }
}
