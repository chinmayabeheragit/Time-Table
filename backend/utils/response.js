// backend/utils/response.js
const handleSuccessResponse = (data, res, message, logMessage) => {
    console.log(logMessage);
    res.status(200).json({
        success: true,
        message,
        data,
    });
};

const handleErrorResponse = (error, res) => {
    const statusCode = error.errorCode || 500;
    const message = error.message || 'Internal server error';
    console.error(message);
    res.status(statusCode).json({
        success: false,
        message,
    });
};

module.exports = {
    handleSuccessResponse,
    handleErrorResponse,
};
