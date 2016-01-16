var express = require('express');
var app = express();

// to do - install moment npm install moment and use it to validate the dates

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/html/index.html');
});

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

app.get('/:time', function(req, res) {
    var time = Date.parse(req.params.time)/1000;
    var date = new Date(req.params.time * 1000);
    var dateStr = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    if (isNaN(date.getDate()) && time == null) {
        res.json({ unix: null, natural: null });
    }
    else if (isNaN(date.getDate())) {
        res.json({ unix: time, natural: req.params.time });
    }
    else {
        res.json({ unix: time, natural: dateStr });
    }
    
});


app.listen(8080);
console.log('Express server listening on port 8080');