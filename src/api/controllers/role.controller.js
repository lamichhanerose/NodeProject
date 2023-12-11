import { Router } from "express";
import { roleService } from "../services";
import HttpStatus from "http-status-codes";

const router = Router();

// get all roles
router.get("/", async (req, res, next) => {
  try {
    const data = await roleService.getAllRoles();
    res.json({ data });
  } catch (err) {
    next(err);
  }
});

//get role by Id
router.get("/:id", async (req, res, next) => {
  try {
    const data = await roleService.getRoleById(req.params.id);
    res.json({ data });
  } catch (err) {
    next(err);
  }
});

// create a new Role.
router.post("/", async (req, res, next) => {
  try {
    const data = await roleService.createRole(req.body);
    res.status(HttpStatus.CREATED).json({ data });
  } catch (err) {
    next(err);
  }
});

export default router;
