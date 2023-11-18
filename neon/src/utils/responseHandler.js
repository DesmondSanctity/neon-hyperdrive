export class AppError extends Error {
    constructor(status, message, statusCode) {
        super(message);
        this.name = this.constructor.name;
        this.status = status
        this.statusCode = statusCode || 500;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class AppResponse {
    constructor(status, message, data, statusCode) {
        this.data = data;
        this.message = message;
        this.status = status;
        this.statusCode = statusCode || 200;
    }

    send(res) {
        res.status(this.statusCode).json({
            status: this.status,
            message: this.message,
            data: this.data,
        });
    }
}