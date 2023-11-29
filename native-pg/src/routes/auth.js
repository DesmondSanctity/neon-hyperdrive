import { Router } from "express";

import * as authController from "../controllers/authControllers.js";

const authRouter = Router();


/** POST Methods */

/**
 * @openapi
 * '/api/v1/auth/signup':
 *  post:
 *     tags:
 *     - Auth Controller
 *     summary: Sign up a User
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - name
 *              - email
 *              - phone
 *              - password
 *            properties:
 *              name:
 *                type: string
 *                default: John Doe
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              phone:
 *                type: string
 *                default: 1234567890
 *              password:
 *                type: string
 *                default: johnDoe100@user!!
 *     responses:
 *      201:
 *        description: Created Successfully
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
authRouter.route('/signup').post(authController.signup)

/**
 * @openapi
 * '/api/v1/auth/login':
 *  post:
 *     tags:
 *     - Auth Controller
 *     summary: Login a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - email
 *              - password
 *            properties:
 *              email:
 *                type: string
 *                default: johndoe@mail.com
 *              password:
 *                type: string
 *                default: johnDoe100@user!!
 *     responses:
 *      201:
 *        description: Created Successfully
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
authRouter.route('/login').post(authController.login);



export default authRouter;