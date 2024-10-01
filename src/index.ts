import logger from './logger';
import dotenv from "dotenv";
import path from 'path';

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
});
import app from './app';

const port = app.get('port');

// export default (req: any, res: any) => {
//     app(req, res);
// };
const server = app.listen(port);

const name = app.get('app_name');

process.on('unhandledRejection', (reason, p) => logger.error('Unhandled Rejection at: Promise ', p, reason));

server.on('listening', () => logger.info('%s application started on http://%s:%d', name, app.get('host'), port));
