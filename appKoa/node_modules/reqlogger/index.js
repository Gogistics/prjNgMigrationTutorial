'use strict';

const url = require('url');

// Express middleware for assigning a logger object to req.log:
function injectLogger(log) {
    return function (req, res, next) {
        const url = req.url;
        const method = req.method;
        req.log = log.createSublogger(req.ip).createSublogger(method + " " + url);

        next();
    };
}

// Express middleware for logging basic info about all requests:
function logRequests(opts) {
    opts = opts || {};
    const threshold = opts.threshold || 500;

    return function (req, res, next) {
        const startTime = new Date();

        function writeLog() {
			const ms = new Date() - startTime;
			const level = (ms >= threshold) ? 'warn' : 'info';

			const userAgent = req.headers['user-agent'];
			const referrer = req.headers['referer'];

			const uaString = userAgent ? `with User-Agent ${JSON.stringify(userAgent)}` : "without User-Agent";
			const referrerString = referrer ? `with Referer ${JSON.stringify(referrer)}` : "without Referer";

			req.log.log(level,
				`sent response ${res.statusCode} in ${ms}ms, requested ${uaString} ${referrerString}`);
        }

        if (res.finished) writeLog();
        else res.on('finish', writeLog);

        next();
    };
}

// Event handler for httpServer's 'listening' event, logging the host and port:
function listeningLogger(log) {
    return function () {
        const address = this.address();
        log.info("Listening on " + url.format({
			protocol: "http",
			hostname: address.address,
			port: address.port
		}));
    };
}

// Express middleware for writing errors to req.log:
function errorLogger(err, req, res, next) {
    req.log.error(err.stack ? err.stack : err.toString());
    next(err);
}

module.exports = {
    injectLogger: injectLogger,
    logRequests: logRequests,
    listeningLogger: listeningLogger,
    errorLogger: errorLogger
};
