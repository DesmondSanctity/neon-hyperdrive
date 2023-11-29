import { Users } from "../../models/index.js";
import { getPagination } from "../../utils/paginateQuery.js";
import { AppError } from "../../utils/responseHandler.js";

export const getUsers = async (req, res, next) => {
  try {
    const results = getPagination(Users, {
      ...req.query,
      attributes: { exclude: ["password"] },
      where: {},
      order: [],
    });

    if (results) {
      return results;
      // new AppResponse('success', '...', { payment }, 200).send(res);
    } else {
      throw new AppError("failed", "...", 400);
    }
  } catch (error) {
    res.status(400).json({
      status: error.status,
      message: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    if (req.params.id) {
      const user = await Users.findOne({
        where: {
          id: req.params.id,
        },
      });

      if (user) {
        return user;
        // new AppResponse('success', '...', { user }, 200).send(res);
      } else {
        throw new AppError("failed", "...", 400);
      }
    } else {
      throw new AppError("failed", "...", 400);
    }
  } catch (error) {
    res.status(400).json({
      status: error.status,
      message: error.message,
    });
  }
};
