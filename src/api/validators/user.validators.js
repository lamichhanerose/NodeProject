import Joi from 'joi';
import validate from '../../utils/validate';
import { userService } from '../services';

const SCHEMA = {
  first_name: Joi.string().label('first_name').max(50).required(),
  last_name: Joi.string().label('last_name').max(50).required(),
  phone_number: Joi.string().label('phone_number').max(10).required(),
  email: Joi.string().label('email').email().required(),
  address: Joi.string().label('address').required(),
  role_id: Joi.number().label('role_id').required(),
};




export async function userValidator(req, res, next) {
  try {
    await validate(req.body, SCHEMA);
    return next();
  } catch (err) {
    return next(err);
  }
}

export function findUser(req, res, next) {
  return userService
    .getUser(req.params.id)
    .then(() => next())
    .catch(err => next(err));
}

