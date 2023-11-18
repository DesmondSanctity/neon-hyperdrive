import { Router } from "express";

import * as userController from "../controllers/userControllers.js";
import Auth from "../middlewares/auth.js";

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
userRouter.route("/").get(Auth, userController.getAll);

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
userRouter.route("/:id").get(Auth, userController.getOne);

/** PUT Methods */

/**
 * @openapi
 * '/api/v1/users/update':
 *  put:
 *     tags:
 *     - User Controller
 *     summary: Update User Account Details
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - userId
 *            properties:
 *              userId:
 *                type: string
 *                default: ''
 *     responses:
 *      200:
 *        description: Updated Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
userRouter.route("/:id").put(Auth, userController.updateOne);

/** DELETE Methods */

/**
 * @openapi
 * '/api/v1/users/{id}':
 *  delete:
 *     tags:
 *     - User Controller
 *     summary: Delete user account by ID
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The user account ID
 *        required: true
 *     responses:
 *      200:
 *        description: Deleted Successfully
 *      400:
 *        description: Bad Request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
userRouter.route("/:id").delete(Auth, userController.deleteOne);

export default userRouter;
