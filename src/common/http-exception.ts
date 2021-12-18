export default class HttpException extends Error {
    statusCode?: number;
    status?: number;
    message: string;
    errror: string | null;

    constructor(statusCode: number, message: string, error?: string | null) {
        super(message);

        this.statusCode = statusCode;
        this.message = message;
        this.errror = error || null;
    }
}