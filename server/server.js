const express = require("express");
const path = require("path");

const routes = require("./routes");

const app = express();
const PORT = 3000;

/* Middleware to read form data */

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* Static frontend folder */

app.use(express.static(path.join(__dirname, "../client")));

/* Routes */

app.use("/", routes);

/* Start Server */

app.listen(PORT, () => {

    console.log("=================================");
    console.log("PhishGuard Awareness Simulator");
    console.log("Server running on:");
    console.log("http://localhost:3000");
    console.log("=================================");

});