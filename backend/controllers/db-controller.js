let mysql  = require('mysql');
let q = require('q');
let Controller = require('./base');
let DBController = new Controller(function() {
    this.dbConfig = {
        host     : '127.0.0.1',       //主机
        user     : 'root',            //MySQL认证用户名
        password : 'rD5053',
        port     : '3306',
        database : 'vcdb'
    };
    this.pool = mysql.createPool(this.dbConfig);
    console.log('[pool connect]  succeed!');
});
DBController.include({
    connect: function () {
        this.connection.connect(function(err){
            if(err){       
                console.log('[query] - :'+err);
                return;
            }
            console.log('[connection connect]  succeed!');
        });
    },
    query: function (sql, params = []) {
        let defer = q.defer();
        this.pool.getConnection(function (err, connection) {
            connection.query(sql, params,function(err, rows, fields) {
                if(err) {
                    defer.reject(err);
                }
                console.log('db query successed');
                defer.resolve(rows);
                connection.release();
            });
        });
        return defer.promise;
    },
    insert: function (sql, params) {
        let defer = q.defer();
        this.pool.getConnection(function (err, connection) {
            connection.query(sql, params,function(err, result) {
                if(err) {
                    defer.reject(err);
                    console.log('db insert failed: ' + err.message);
                    return;
                }
                console.log('db insert successed: ' + result.insertId);
                defer.resolve(true);
                connection.release();
            });
        });
        return defer.promise;
    },
    disconnect: function () {
        this.connection.end(function(err){
            if(err){       
                return;
            }
            console.log('[connection end] succeed!');
        });
    }
});
module.exports = DBController.create();
