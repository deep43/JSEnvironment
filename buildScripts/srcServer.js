/**
 * Created by dhazra on 11/26/2017.
 */
import express from  'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackDevMiddleWare from 'webpack-dev-middleware';
import config from '../webpack.config.dev';

/*eslint-disable no-console*/

const port = 3200;
const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleWare(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    }
    else {
        open('http://localhost:' + port);
    }
});

// lt --port 3200 --subdomain deep