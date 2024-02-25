import { prismaClient } from "../application/database.js";
import { ErrorResponse } from "../error/error-response.js";
import { loginUserValidation, logoutUserValidation, registerUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import bcrypt from "bcrypt"
import {v4 as uuid} from "uuid"


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

const login = async (request) => {
  request = validate(loginUserValidation, request);

  const user = await prismaClient.user.findUnique({
    where: {
      username: request.username
    },
    select: {
      username: true,
      password: true
    }
  });

  if (!user) {
    throw new ErrorResponse(401, "Invalid Username or Password");
  }

  const validatePassword = await bcrypt.compare(request.password, user.password);

  if (!validate) {
    throw new ErrorResponse(401, "Invalid Username or Password");
  }

  const token = uuid().toString();

  return await prismaClient.user.update({
    data: {
      token: token
    },
    where: {
      username: user.username
    },
    select: {
      token: true
    }
  })
}

const logout = async (username) => {
  username = validate(logoutUserValidation, username);

  const user = await prismaClient.user.findUnique({
    where: {
      username: username
    }
  });

  if (!user) {
    throw new ErrorResponse(404, "User is not found");
  }

  return await prismaClient.user.update({
    where: {
      username: username
    },
    data: {
      token: null
    },
    select: false
  });

}

export default {
  register,
  login,
  logout
}