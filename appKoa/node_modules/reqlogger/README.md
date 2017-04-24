Basic usage
===========

    var reqlogger = require('reqlogger');
    var log = require('logginator')();
    var app = require('express')();

    app.use(reqlogger.injectLogger(log));
    app.use(reqlogger.logRequests());

    app.get('/', function (req, res) {
      // The injectLogger middleware injected req.log:
      req.log.info('Hello log!');

      res.send('Hello world');
    });

    app.use(reqlogger.errorLogger);

    app.listen(4444, reqlogger.listeningLogger(log));

`injectLogger(log)` injects a logger into the http request, so we can use
`req.log` later in the stack. The injected logger is tagged with the peer
address of the request and the method and path that were requested.

`logRequests()` uses `req.log` to output a log message for every request
to this server. It logs the status code that was produced, and the time it
took to process the request.

Log messages produced by the above setup can look like this:

    17:17:22.542 [app, 127.0.0.1, GET /] Hello log!
    17:17:22.545 [app, 127.0.0.1, GET /] sent response 200 in 5ms

`listeningLogger(log)` produces a message when the server enters its listening
state and is accepting connections:

    17:17:18.553 [app] Listening on http://127.0.0.1:4444

`errorLogger` is an express error handler which logs errors to `req.log` and
passes them on to the next error handler.
