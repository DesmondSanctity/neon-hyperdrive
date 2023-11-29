import {
  getUser,
  getUsers,
} from "../services/user/index.js";
import { AppResponse } from "../utils/responseHandler.js";

export const getAll = async (req, res) => {
  try {
    const users = await getUsers(req, res);

    if (users)
      new AppResponse(
        "success",
        "Users fetched successfully",
        { users },
        200
      ).send(res);
  } catch (error) {
    res.status(400).json({
      status: error.status,
      message: error.message,
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const user = await getUser(req, res);

    if (user)
      new AppResponse(
        "success",
        "User fetched successfully",
        { user },
        200
      ).send(res);
  } catch (error) {
    res.status(400).json({
      status: error.status,
      message: error.message,
    });
  }
};
