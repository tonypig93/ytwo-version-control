'use strict';
let app = require('express')();
let http = require('http').Server(app);
let bodyParser = require('body-parser');
let UserController = require('./controllers/user-controller');
let ProjectController = require('./controllers/project-controller');
let DbController = require('./controllers/db-controller');
let GroupController = require('./controllers/group-controller');
let httpService = require('./base/http-service');

let { dataJson: dataJson, http: _http } = httpService;

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
    userInfo.IP = req.ip;
    UserController.login(userInfo).then(function (user) {
        if(user) {
            res.end(dataJson(user));
        } else {
            res.end(dataJson(null, 1, 'login failed'));
        }
    }, function (err) {
        res.end(dataJson(null, 1, err));
    });
});
app.post('/checkIdentity', function (req, res) {
    let userInfo = req.body || {};
    userInfo.IP = req.ip;
    userInfo.$hash = req.header('authorization');
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
app.post('/logout', function (req, res) {
    let $hash = req.header('authorization');
    UserController.logout($hash);
    res.end(dataJson(true));
});
app.get('/group/list', function (req, res) {
    GroupController.getList().then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('get group list fail')
        res.end(dataJson(null, 1, 'info: ' + err));ß
    });
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
        res.end(dataJson({
            projects: data[0]
        }));
    }, function (err) {
        console.log('get group manage failed')
        res.end(dataJson(null, 1, 'info: ' + err));ß
    })
});
app.get('/user/list', function (req, res) {
    let groudId = req.query.groupId;
    let params = {
        groupId: groudId
    };
    UserController.getList(params).then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('get user list failed');
        res.end(dataJson(null, 1, 'info: ' + err));
    })
});
app.post('/user/add', function (req, res) {
    let userInfo = req.body;
    UserController.add(userInfo).then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('add user failed')
        res.end(dataJson(null, 1, 'info: ' + err));
    })
});
app.post('/user/delete', function (req, res) {
    let userId = req.body.id;
    UserController.deleteUser(userId).then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('delete user failed')
        res.end(dataJson(null, 1, 'info: ' + err));
    })
});
app.get('/project/list', function (req, res) {
    ProjectController.getList().then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('get project list fail')
        res.end(dataJson(null, 1, 'info: ' + err));ß
    })
});
app.post('/project/add', function (req, res) {
    let project = req.body;
    ProjectController.add(project).then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('add project failed')
        res.end(dataJson(null, 1, 'info: ' + err));
    })
});
app.get('/project/manage', function (req, res) {
    let projectId = req.query.id;
    ProjectController.getManage(projectId).then(function (data) {
        res.end(dataJson({
            project: data[0],
            members: data[1],
            tasks: data[2],
            versions: data[3],
            roles: data[4],
            powers: data[5]
        }));
    }, function (err) {
        console.log('get project manage failed')
        res.end(dataJson(null, 1, 'info: ' + err));
    })
});
app.get('/project/role/list', function (req, res) {
    let projectId = req.query.id;
    ProjectController.getRoleList(projectId).then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('get project role list fail');
        res.end(dataJson(null, 1, 'info: ' + err));
    })
});
app.post('/project/role/update', function (req, res) {
    let {roleId, value} = req.body;
    ProjectController.updateRole(roleId, value).then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('update project role failed')
        res.end(dataJson(null, 1, 'info: ' + err));
    })
});
app.post('/project/role/delete', function (req, res) {
    let {roleId, projectId} = req.body;
    ProjectController.deleteRole(roleId, projectId).then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('delete project failed')
        res.end(dataJson(null, 1, 'info: ' + err));
    })
});
app.post('/project/role/add', function (req, res) {
    let {roleName, value, projectId} = req.body;
    ProjectController.addRole(roleName, value, projectId).then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('add project role failed')
        res.end(dataJson(null, 1, 'info: ' + err));
    })
});
app.post('/project/user/add', function (req, res) {
    let userInfo = req.body;
    ProjectController.addUser(userInfo).then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('add user to project failed')
        res.end(dataJson(null, 1, 'info: ' + err));
    })
});
app.post('/project/user/delete', function (req, res) {
    let userId = req.body.userId,
        projectId = req.body.projectId;
    ProjectController.deleteUser(userId, projectId).then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('delete user from project failed')
        res.end(dataJson(null, 1, 'info: ' + err));
    })
});
app.post('/project/version/update', _http(function (req, res, $hash) {
    let {major, minor, patch, projectId, repoCode, log, ID} = req.body;
    let userID = UserController.getUserIDFromHash($hash);
    ProjectController.updateVersion(major, minor, patch, projectId, repoCode, log, userID, ID).then(function (data) {
        res.end(dataJson(data));
    }, function (err) {
        console.log('update project version failed')
        res.end(dataJson(null, 1, 'info: ' + err));
    })
}, function ($hash) {
    return !!$hash;
}));

http.listen(8000, function(){
	console.log('listening on *:8000');
});
