var express = require('express');
var app = express();

var game = require('./public/game');

app.get('/move', function (req, res) {
    console.log("server");
    console.log(req.query.board);
    var ret = game.move(req.query.board);
    console.log("server receive ");
    console.log(ret);
    res.send(JSON.stringify(game.move(req.query.board)));
});


app.use(express.static('public'));

app.listen(3000, () => {
    console.log('express new listening on port 3000');
});
