let userController = {
    users: [
        { id: 1000, userName: 'hay', password: '123', level: 0, isAlive: false }
    ],
    findByName: function(name) {
        for(let i = 0; i < this.users.length; i++) {
            if(this.users[i].userName === name) {
                return this.users[i];
            }
        }
        return null;
    },
    checkLogin: function ({userName: userName, password: psw}) {
        let __user = this.findByName(userName);
        if(__user && (__user.password === psw)){
            __user.isAlive = true;
            return this.basicInfo(__user);
        } else {
            return false;
        }
    },
    basicInfo: function (user) {
        return {
            userName: user.userName,
            level: user.level
        };
    }
}
module.exports = userController;