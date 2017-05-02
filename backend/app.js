var app = require('express')();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var userController = require('./controllers/user-controller');
var projectController = require('./controllers/project-controller');

app.use(bodyParser());
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});
// app.get('*', function (req, res) {
//     res.redirect('/');
// })
app.get('/', function(req, res){
	res.sendFile( __dirname + "../frontend/src/index.html" );
});

app.post('/login', function (req, res) {
    let userInfo = req.body;
    let __user = userController.checkLogin(userInfo);
    if(__user) {
        res.end(JSON.stringify(__user));
    } else {
        res.end('false');
    }
});
app.post('/checkIdentity', function (req, res) {
    let userInfo = req.body;
    let __user = userController.findByName(userInfo.userName);
    if(__user && __user.isAlive) {
        res.end(JSON.stringify(userController.basicInfo(__user)));
    } else {
        res.end('false');
    }
});
app.get('/getprojectlist', function (req, res) {
    res.end(JSON.stringify(projectController.list));
});
http.listen(8000, function(){
	console.log('listening on *:8000');
});