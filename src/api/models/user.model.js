import { Model } from "objection";
import dbConst from "../../database/constants";

class User extends Model {
  static get tableName() {
    return dbConst.table_name.TBL_USERS;
  }

  static get hasTimestamps() {
    return true;
  }
}

export default User;
