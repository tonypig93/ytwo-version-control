"use strict";
var EMAIL_REG = new RegExp('[a-z0-9]+@[a-z0-9]+.com');
function isEmail(c) {
    return (EMAIL_REG.test(c.value)) ? null : {
        email: {
            valid: false,
            errorMsg: 'Email address invalid'
        }
    };
}
exports.isEmail = isEmail;
function password2(c) {
    var v = c.value;
    var e = c.root.get('password');
    if (!e) {
        return null;
    }
    // value not equal
    return (e && v === e.value) ? null : {
        password2: {
            valid: false
        }
    };
}
exports.password2 = password2;
function notEmpty(c) {
    return (c.value && c.value.length > 0) ? null : {
        notEmpty: {
            valid: false
        }
    };
}
exports.notEmpty = notEmpty;
//# sourceMappingURL=validator.js.map