let Controller = require('./base');
let DBController = require('./db-controller');
let encrypt = require('crypto-js/md5');
let q = require('q');
let UserController = new Controller(function() {
    this.userList = DBController.query('select * from USER');
    this.loginUser = [];
});
UserController.include({
    findByName: function(name) {
        let defer = q.defer();
        this.userList.then(function (data) {
            for(let i = 0; i < data.length; i++) {
                if(data[i].USER_NAME === name) {
                    defer.resolve(data[i]);
                }
            }
            defer.reject(false);
        }, (err) => {
            defer.reject(err);
            console.log(err);
        });
        return defer.promise;
    },
    login: function ({userName: userName, password: password, IP: IP}) {
        let defer = q.defer();
        this.findByName(userName).then((user) => {
            if(user && (user.PASSWORD === password)){
                user.expireTime = (new Date()).getTime() + 86400000; // 1 day
                user.$hash = this.getMD5(userName + password + IP);
                this.loginUser.push(user.ID);
                defer.resolve(this.basicInfo(user));
            } else {
                defer.reject(false);
            }
        }, (err) => {
            defer.reject(err);
            console.log(err);
        });
        return defer.promise;
    },
    checkLogin: function ({userName: userName, $hash: $hash, IP: IP}) {
        let defer = q.defer();
        this.findByName(userName).then(user => {
            if(user && (this.getMD5(user.USER_NAME + user.PASSWORD + IP) === $hash)
            && (user.expireTime && user.expireTime > (new Date().getTime())) ) {
                defer.resolve(this.basicInfo(user));
            } else {
                defer.reject(false);
            }
        }, err => {
            defer.reject(false);
        });
        return defer.promise;
    },
    basicInfo: function (users) {
        let isArray = users instanceof Array;
        if(!isArray) {
            users = [users];
        }
        let tmp = [];
            for(let i = 0; i < users.length; i ++) {
                let user = users[i];
                tmp.push({
                    ID: user.ID,
                    userName: user.USER_NAME,
                    expireTime: user.expireTime,
                    $hash: user.$hash
                })
            }
        return isArray ? tmp : tmp[0];
    },
    getMD5: function (str) {
        return encrypt(str).toString();
    }
});
module.exports = UserController.create();