let app = require('express')();
let http = require('http').Server(app);
let bodyParser = require('body-parser');
let UserController = require('./controllers/user-controller');
let ProjectController = require('./controllers/project-controller');
let DbController = require('./controllers/db-controller');
let GroupController = require('./controllers/group-controller');

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
function dataJson(obj, error = 0, msg = '') {
    return JSON.stringify({
        error: error,
        data: obj,
        msg: msg
    });
}
app.post('/login', function (req, res) {
    let userInfo = req.body;
    userInfo.IP = req.ip;
    UserController.login(userInfo).then(function (user) {
        if(user) {
            res.end(dataJson(user));
        } else {
            res.end(dataJson(null, 1, 'error'));
        }
    }, function (err) {
        res.end(dataJson(null, 1, err));
    });
});
app.post('/checkIdentity', function (req, res) {
    let userInfo = req.body;
    userInfo.IP = req.ip;
    UserController.checkLogin(userInfo).then(function (user) {
        // console.log(user);
        if(user) {
            res.end(dataJson(user));
        } else {
            res.end(dataJson(null, 1, 'check result: false'));
        }
    }, function () {
        console.log('user check fail')
        res.end(dataJson(null, 1, 'check result: false'));
    });
});
app.get('/group/list', function (req, res) {
    GroupController.getList().then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('get group list fail')
        res.end(dataJson(null, 1, 'info: ' + err));ß
    })
});
app.post('/group/add', function (req, res) {
    let params = req.body;
    GroupController.add(params).then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('add group fail')
        res.end(dataJson(null, 1, 'info: ' + err));
    })
});
app.get('/group/manage', function (req, res) {
    let groudId = req.query.id;
    GroupController.getManage(groudId).then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('get manage fail')
        res.end(dataJson(null, 1, 'info: ' + err));ß
    })
});
app.get('/getprojectlist', function (req, res) {
    res.end(JSON.stringify(ProjectController.list));
});
http.listen(8000, function(){
	console.log('listening on *:8000');
});