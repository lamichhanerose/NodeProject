import Boom from "boom";
import User from "../models/user.model";

export async function getAllUser() {
  try {
    const users = await User.query().select();
    return users;
  } catch (error) {
    throw Boom.badImplementation("Error retrieving users", error);
  }
}

export async function getAUserById(id) {
  try {
    const user = await User.query().findById(id);

    if (!user) {
      throw Boom.notFound("User not found");
    }

    return user;
  } catch (error) {
    throw Boom.badImplementation("Error retrieving user", error);
  }
}

export async function createUser(user) {
  try {
    console.log("Attempting to create user with data:", user);
    const createdUser = await User.query().insert(user);
    console.log("User created successfully:", createdUser);
    return createdUser;
  } catch (error) {
    console.error("Error creating user:", error);
    throw Boom.badImplementation("Error creating user", error);
  }
}

export async function getUser(userId) {
  try {
    console.log("Attempting to retrieve user with ID:", userId);

    const user = await User.query().findById(userId);

    if (!user) {
      throw Boom.notFound("User not found");
    }

    return user;
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw Boom.badImplementation("Error retrieving user", error);
  }
}

export async function updateUser(id, user) {
  try {
    console.log("Updating user with ID:", id);
    console.log("User data:", user);

    if (!user) {
      throw Boom.badRequest("User data is missing");
    }

    const updatedUser = await User.query()
      .findById(id)
      .patch(user);

    console.log("User updated successfully:", updatedUser);

    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw Boom.badImplementation("Error updating user", error);
  }
}

export async function deleteUser(id) {
  try {
    const user = await User.query().findById(id);

    if (!user) {
      throw Boom.notFound("User not found");
    }

    await user.$query().delete();
    return { success: true };
  } catch (error) {
    throw Boom.badImplementation("Error deleting user", error);
  }
}
