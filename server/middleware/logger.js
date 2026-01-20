const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

const timeLogger =(req, res, next) => {
    let currentTime = new Date();
    console.log(currentTime);
    next();
}

module.exports = logger;
module.exports = timeLogger;

// Common beginner mistakes (avoid these):
// Forgetting next()
// Sending response AND calling next()
// Putting middleware after routes
// Writing heavy logic inside middleware