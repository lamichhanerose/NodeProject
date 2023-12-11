import dbConst from "../../database/constants";
import Role from "../models/role.model";

export function getAllRoles() {
  return Role.query();
}

export function getRoleById(id) {
  return Role.query().findById(id);
}

export function createRole(role) {
  return Role.query().insert(role);
}
