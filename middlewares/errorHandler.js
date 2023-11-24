// not found

const notFound= (req, res, next) => {
    const error = new Error(`Not Found : ${req.originalUrl}`);
    res.status(404);
    next(error);
}

// Error handler

const errorHandler =(err, req, res, next) => {
    const statusCode = res.statusCode== 200 ? 500 :res.statuscode;
    res.status(statusCode);
    res.json({
        status: "fail",
        message: err?.message,
        stack: err?.stack,
    })
}

module.exports = {errorHandler, notFound}