const express = require("express");
const router = express.Router();
const logAttempt = require("./logger");

router.post("/login/google", (req, res) => {

    logAttempt("Google Login Simulation", req);

    res.redirect("/warning.html?site=google");
});

router.post("/login/github", (req, res) => {

    logAttempt("GitHub Login Simulation", req);

    res.redirect("/warning.html?site=github");
});

router.post("/login/linkedin", (req, res) => {

    logAttempt("LinkedIn Login Simulation", req);

    res.redirect("/warning.html?site=linkedin");
});

router.post("/login/facebook", (req, res) => {

    logAttempt("Facebook Login Simulation", req);

    res.redirect("/warning.html?site=facebook");
});

router.post("/login/instagram", (req, res) => {

    logAttempt("Instagram Login Simulation", req);

    res.redirect("/warning.html?site=instagram");
});

router.post("/login/steam", (req, res) => {

    logAttempt("Steam Login Simulation", req);

    res.redirect("/warning.html?site=steam");
});

module.exports = router;