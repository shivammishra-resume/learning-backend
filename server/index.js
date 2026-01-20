const express = require("express");    // You are importing Express, express is now a function

const app = express(); //express() creates a server app, app = your server instance,Think:app = restaurant, Express = restaurant blueprint

const logger = require("./middleware/logger");
// const timeLogger = require("./middleware/logger");

app.use(express.json());  // Mean: “Backend, please understand JSON body sent by frontend.”, Without this: POST requests break, req.body is undefined

app.use(logger);
// app.use(timeLogger)

app.use("/api", require("./routes/testRoutes"));  // “Any request starting with /api, send it to this router.”, then in router: router.get("/test", ...), So full path becomes: /api/test , This is route composition.


app.get("/", (req, res) => {
  res.send("Hello from backend");
});    // get → HTTP GET request, / → route (URL path), req → request (incoming data), res → response (what you send back), i.e. “When someone visits /, give them a response.”

app.get("/api/test", (req, res) => {
  res.json({ message: "API working" });
});
app.get("/api/hello", (req, res) => {
  res.json({ name: "Shivam" });
});
app.get("/api/admin", (req, res) => {
  res.json({ page: "admin is open"});
})



app.listen(4000, () => {
    console.log("Server is running on port 4000");
}); // listen = “wait”, 5000 = door number (port), Callback = confirmation message
// In English: “Hey computer, start a server and listen on door 5000.”
