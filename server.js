const express = require('express');
const app = express();   // creates an Express application

// import usersRouter
const usersRouter = require("./routes/usersRouter");

const port = 3000;

// Setting up view engine
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    // res.download('server.js');
    res.render(__dirname + "/views/someFile", { text: "First" });
});

app.use("/users", usersRouter);

app.listen(port, () => {
    console.log("listening at port " + port);
});