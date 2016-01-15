var express = require('express');
var app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/html/index.html');
});

app.listen(8080);
console.log('Express server listening on port 8080');