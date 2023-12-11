import { Router } from "express";
import HttpStatus from "http-status-codes";
import * as userService from "../services/user.service";
import { findUser, userValidator } from "../validators/user.validators";

const router = Router();

async function someRouteHandler(req, res, next) {
  const userId = req.params.id;
  const userData = req.body;

  try {
    const updatedUser = await userService.updateUser(userId, userData);
    res.json({ data: updatedUser });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/users
 */
router.get("/", async (req, res, next) => {
  try {
    const data = await userService.getAllUser();
    res.json({ data });
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/users/:id
 */
router.get("/:id", async (req, res, next) => {
  try {
    const data = await userService.getAUserById(req.params.id);
    res.json({ data });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/users
 */
router.post("/", userValidator, async (req, res, next) => {
  try {
    console.log("Request body:", req.body);
    const data = await userService.createUser(req.body);
    res.status(HttpStatus.CREATED).json({ data });
  } catch (err) {
    next(err);
  }
});

/**
 * PUT /api/users/:id
 */
router.put("/:id", userValidator, async (req, res, next) => {
  try {
    const data = await userService.updateUser(req.params.id, req.body);
    res.json({ data });
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /api/users/:id
 */
router.delete("/:id", findUser, async (req, res, next) => {
  try {
    const data = await userService.deleteUser(req.params.id);
    res.status(HttpStatus.NO_CONTENT).json({ data });
  } catch (err) {
    next(err);
  }
});

export default router;
someRouteHandler;
