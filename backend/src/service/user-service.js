import { prismaClient } from "../application/database.js";
import { ErrorResponse } from "../error/error-response.js";
import { registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt"


const register = async (request) => {
  const user = validate(registerUserValidation, request);

  const countUser = await prismaClient.user.count({
    where: {
      username: user.username
    }
  });

  if (countUser === 1) {
    throw new ErrorResponse(400, 'Username is already exist');
  }

  user.password = await bcrypt.hash(user.password, 10);

  const result =  await prismaClient.user.create({
    data: user,
    select: {
      username: true,
      name: true
    }
  });

  return result;
}

export default {
  register
}