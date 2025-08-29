import * as express from 'express';
import { AddressInfo } from "net";
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
    
import users from './routes/users';
import roles from './routes/roles';

const debug = require('debug')('AdminManagement');
const app = express();
dotenv.config();
dotenv.config({ path: `.env.local`, override: true });

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(cors({
    origin: process.env.UI_APP_URL
}));

app.use('/users', users);
app.use('/roles', roles);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err[ 'status' ] = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
        res.status(err['status'] || 500).send(err.message);
    });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => { // eslint-disable-line @typescript-eslint/no-unused-vars
    res.status(err.status || 500);
});

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function () {
    debug(`Express server listening on port ${(server.address() as AddressInfo).port}`);
});