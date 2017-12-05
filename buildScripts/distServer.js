/**
 * Created by dhazra on 11/26/2017.
 */
import express from  'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/*eslint-disable no-console*/

const port = 3200;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
    res.json([
        {"name": "Deep", "title":"Hazra"},
        {"name": "Rahul", "title":"Hazra"},
        {"name": "Purnima", "title":"Hazra"}
    ]);
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