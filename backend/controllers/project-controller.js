let q = require('q');
let Controller = require('./base');
let DBController = require('./db-controller');
let ProjectController = new Controller(function() {
});
ProjectController.include({
    getList: function () {
        return DBController.query('select * from PROJECT where MARK_DELETE=0');
    },
    add: function ({projectName, description, tasks, visibility, members, groupId}) {
        let baseSql = {
            sql: 'insert into project (PRJ_NAME,GROUP_FK,VISIBILITY,DESCRIPTION) values (?,?,?,?)',
            params: [projectName, groupId, visibility, description],
            callback: callback
        }
        function callback(insertId) {
            let sqlList = [];
            let params = [];
            for (let i = 0, item; (item = tasks[i]); i ++) {
                params[i] = [insertId, 'task', item.content, groupId];
            }
            sqlList.push({
                sql: 'insert into PRJ_TASK (PRJ_FK,TASK_TITLE,TASK_DESCRIPTION,GROUP_FK) values ?',
                params: params
            });
            params = [];
            for (let i = 0, item; (item = members[i]); i ++) {
                params[i] = [item, insertId];
            }
            sqlList.push({
                sql: 'insert into PRJ_MEMBER (USER_FK,PRJ_FK) values ?',
                params: params
            });
            return sqlList;
        }
        return DBController.transaction(baseSql);
    },
    getManage: function (id) {
        let defer1 = q.defer();
        DBController.query('select * from PROJECT where ID=?', [id])
        .then(function (res) {
            defer1.resolve(res);
        }, function (err) {
            defer1.reject(err);
        });

        let defer2 = q.defer();
        DBController.query('select * from PRJ_MEMBER where PRJ_FK=?', [id])
        .then(function (res) {
            defer2.resolve(res);
        }, function (err) {
            defer2.reject(err);
        });

        let defer3 = q.defer();
        DBController.query('select * from PRJ_TASK where PRJ_FK=?', [id])
        .then(function (res) {
            defer3.resolve(res);
        }, function (err) {
            defer3.reject(err);
        });

        let defer4 = q.defer();
        DBController.query('select * from PRJ_VERSION where PRJ_FK=?', [id])
        .then(function (res) {
            defer4.resolve(res);
        }, function (err) {
            defer4.reject(err);
        });
        
        let all = q.all([defer1.promise, defer2.promise, defer3.promise, defer4.promise]);
        return all;
    }
});
module.exports = ProjectController.create();