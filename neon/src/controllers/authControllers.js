import { loginUser, signupUser } from "../services/auth/index.js"
import { AppResponse } from "../utils/responseHandler.js";

export const signup = async (req, res) => {
    try {
        const userSignup = await signupUser(req, res)
        console.log(userSignup)

        if (userSignup)
            new AppResponse('success', 'User signup successfully', { userSignup }, 200).send(res);

    } catch (error) {
        res.status(400).json({
            status: error.status,
            message: error.message,
        });
    }
}

export const login = async (req, res) => {
    try {
        const userLogin = await loginUser(req, res)

        if (userLogin)
            new AppResponse('success', 'User login successfully', { userLogin }, 200).send(res);

    } catch (error) {
        res.status(400).json({
            status: error.status,
            message: error.message,
        });
    }
}