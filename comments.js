// create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// create a server
var server = app.listen(3000, function(){
	console.log("Node.js is listening to PORT:" + server.address().port);
});

// set view engine
app.set('view engine', 'ejs');

// set static directory
app.use(express.static('public'));

// use body-parser
app.use(bodyParser.urlencoded({extended: false}));

// create a comment list
var commentList = [];

// create a comment list file
var commentListFile = __dirname + '/public/commentList.json';

// read comment list
fs.readFile(commentListFile, 'utf8', function(err, data){
	if (!err) {
		commentList = JSON.parse(data);
	}
});

// display comments
app.get('/comments', function(req, res){
	res.render('comments', {commentList: commentList});
});

// add comments
app.post('/add', function(req, res){
	var comment = req.body.comment;
	if (comment) {
		commentList.push(comment);
		fs.writeFile(commentListFile, JSON.stringify(commentList), function(err){
			if (err) {
				throw err;
			}
		});
	}
	res.redirect('/comments');
});

// delete comments
app.post('/delete', function(req, res){
	var deleteNo = req.body.deleteNo;
	if (deleteNo) {
		commentList.splice(deleteNo, 1);
		fs.writeFile(commentListFile, JSON.stringify(commentList), function(err){
			if (err) {
				throw err;
			}
		});
	}
	res.redirect('/comments');
});