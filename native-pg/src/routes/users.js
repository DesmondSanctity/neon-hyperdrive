import { Router } from "express";

import * as userController from "../controllers/userControllers.js";

const userRouter = Router();

/** GET Methods */

/**
 * @openapi
 * '/api/v1/users':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get all the user's accounts in the model
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
userRouter.route("/").get(userController.getAll);

/**
 * @openapi
 * '/api/v1/users/{id}':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get user account by ID
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The user account ID
 *        required: true
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
userRouter.route("/:id").get(userController.getOne);


export default userRouter;
