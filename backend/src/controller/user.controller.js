import userService from "../service/user-service.js";


const register = async (req, res, next) => {
  try {
    const result = await userService.register(req.body);
    console.info(result)
    res.status(201).json({
      data: result
    });
  } catch (error) {
    next(error);
  }
}

export default {
  register
}