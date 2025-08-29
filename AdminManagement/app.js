"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const users_1 = require("./routes/users");
const roles_1 = require("./routes/roles");
const debug = require('debug')('AdminManagement');
const app = express();
dotenv.config();
dotenv.config({ path: `.env.local`, override: true });
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors({
    origin: process.env.UI_APP_URL
}));
app.use('/users', users_1.default);
app.use('/roles', roles_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500).send(err.message);
    });
}
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
});
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), function () {
    debug(`Express server listening on port ${server.address().port}`);
});
//# sourceMappingURL=app.js.map