const express = require('express');
const port = 3000;

const app = express();

let router = express.Router();
router.get('/', function (req, res, next) {
    res.send("Apple");
});

app.use('/api', router);

app.use(express.static('www'));
var server = app.listen(port, () => console.log('Running on http://localhost:' + port));