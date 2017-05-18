'use strict';
function http(response, guard) {
    return function (req, res) {
        let $hash = req.header('authorization');
        if (typeof guard === 'function') {
            if (guard.call(null, $hash)) {
                response.call(null, req, res, $hash);
            } else {
                res.end(dataJson(null, 1, 'higher power required'));
            }
        } else {
            response.call(null, req, res, $hash);
        }
    }
}
function dataJson(obj, error = 0, msg = '') {
    return JSON.stringify({
        error: error,
        data: obj,
        msg: msg
    });
}
module.exports = {
    http: http,
    dataJson: dataJson
};