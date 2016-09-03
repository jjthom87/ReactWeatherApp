var express = require('express');

var app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

app.use(function (req, res, next){
	if (req.headers['x-forwarded-proto' === 'http']) {
		next();
	} else {
		res.redirect('http://' + req.hostname + req.url);
	}
})

app.listen(PORT, function(){
	console.log('Express Server is up on port ' + PORT);
})