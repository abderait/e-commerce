var express = require('express');
var morgan = require('morgan');

var app = express();

//middleware
app.use(morgan('dev'));

app.get('/',  function(req, res){
	res.json("TOTO");	
});

app.listen(3000, function(err) {
	if (err) throw err;
	console.log("server is running on port 3000");
})