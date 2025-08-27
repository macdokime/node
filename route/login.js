function loggerMiddleware(req, res, next) {
    const method = req.method;
    const url = req.url;
    console.log(`[LOG] ${method} ${url}`);
    next();
  }
  
  module.exports = loggerMiddleware;
  