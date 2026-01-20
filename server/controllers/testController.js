const testController = (req, res) => {
  res.json({ message: "Controller is working" });

}; // This is just a function, It receives req and res, It sends a response

const helloController = (req, res) => {
  res.json({ hello: "world" });
};

const getInternshipById = (req, res) => {
  const id = req.params.id;
  res.json({ message: `Internship ${id}` });
};

const getUserId = (req, res) => {
  const id = req.params.id;
  res.json({ message: `Users ${id}` });
}

module.exports = testController;
module.exports = helloController;
module.exports = getInternshipById;
module.exports = getUserId;