const testController = (req, res) => {
  res.json({ message: "Controller is working" });
}; // This is just a function, It receives req and res, It sends a response

const helloController = (req, res) => {
    res.json({ hello: "world" });
}
module.exports = testController;
module.exports = helloController;
