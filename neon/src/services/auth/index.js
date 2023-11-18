import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Users } from "../../models/index.js";
import { jwtSecret, jwtExpiresIn } from "../../config/index.js";
import { AppError } from "../../utils/responseHandler.js";


export const signupUser = async (req, res) => {
    try {

        const { email, fullName, phoneNumber, password, dateOfBirth } = req.body

        // Use async/await instead of promises
        const existEmail = await Users.findOne({ where: { email: email } });

        if (existEmail) {
            throw new AppError('failed', 'Email already exsit. Try again', 400);
        }

        const existPhoneNumber = await Users.findOne({ where: { phoneNumber: phoneNumber } });

        if (existPhoneNumber)
            throw new AppError('failed', 'Phone number already exsit. Try again', 400);

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await Users.create({
            email: email,
            password: hashedPassword,
            fullName: fullName,
            phoneNumber: phoneNumber,
            dateOfBirth: dateOfBirth
        });

        const newUser = await Users.scope('withoutSensitiveInfo').findByPk(user.userId);

        // Create a JWT//using email, we would use role for the purpose of authorization
        const token = jwt.sign({
            userId: user.userId
        }, jwtSecret, { expiresIn: jwtExpiresIn });

        // Create success response
        return { user: newUser, token };
        // new AppResponse("success", 'User created successfully', { user: newUser, token }, 201).send(res);

    } catch (error) {
        res.status(400).json({
            status: error.status,
            message: error.message,
        });
    }
}

export const loginUser = async (req, res) => {
    try {
        // Find the user by email
        const user = await Users.findOne({ where: { email: req.body.email } });
        if (!user) {
            throw new AppError('failed', 'User with this email not found', 400);
        }
        // Checking for valid  password
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            throw new AppError('failed', 'Invalid email or password', 400);
        }

        // Create a JWT//using email, we would use role for the purpose of authorization
        const token = jwt.sign({
            userId: user.userId
        }, jwtSecret, { expiresIn: jwtExpiresIn });

        user.password = null

        return { user, token };
        // new AppResponse('success', 'User logged in successfully', { user, token }, 201).send(res);

    } catch (error) {
        res.status(400).json({
            status: error.status,
            message: error.message,
        });
    }
}

