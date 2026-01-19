const express = require("express");    // You are importing Express, express is now a function

const app = express(); //express() creates a server app, app = your server instance,Think:app = restaurant, Express = restaurant blueprint

app.listen(5000, () => {
    console.log("Server is running on port 5000")
}); // listen = “wait”, 5000 = door number (port), Callback = confirmation message
// In English: “Hey computer, start a server and listen on door 5000.”
