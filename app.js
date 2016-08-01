var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));

// app.get('/', function (req, res) {
//   res.redirect('app/index.html');
// });

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
