var express = require('express'),
	app = express(),
	pjson = require('./package.json'),
	open = require('open'),
    port = process.argv[2] || 3011;

app.use(express.static(__dirname + '/'));

app.listen(port, function () {
    console.log('Running digio-task@ '+pjson.version+' version on port '+ port);
    open('http://127.0.0.1:'+port+'/#!/list', function (err) {});
});