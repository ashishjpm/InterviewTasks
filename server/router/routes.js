var appRouter = function(app) {
	var fs = require('fs');
	app.get("/authlogin", function(req, res) {
        if((req.uname == "ashishjpm@gmail.com") && (req.password == "ashishmiahra")){
            res.send("success");
        }
        else{
            res.send("fail");
        }
	});

    app.get("/readfile", function(req, res) {
        fs.readFile('server/resource/videoLib1.json', function(err, data) {
            if (err) {
                res.send("err reading file: " + err);
            }
            else{
                res.send(data.toString());
            }
        });
    });
}

module.exports = appRouter;