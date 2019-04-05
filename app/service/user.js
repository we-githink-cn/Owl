const Service = require('egg').Service;

class UserService extends Service {

    /**
     * 生成 Token
     * @param {Object} data
     */
    async createToken(data) {
        const {ctx} = this;
        return ctx.app.jwt.sign(data, ctx.app.config.jwt.secret, {
            expiresIn: "12h"
        });
    }

    /**
     * 验证token的合法性
     * @param {String} token
     */
    async verifyToken(token) {
        const {ctx} = this;
        return new Promise((resolve, reject) => {
            ctx.app.jwt.verify(token, ctx.app.config.jwt.secret, function(err, decoded) {
                let result = {};
                if (err) {
                    /*
                      err = {
                        name: 'TokenExpiredError',
                        message: 'jwt expired',
                        expiredAt: 1408621000
                      }
                    */
                    result.verify = false;
                    result.message = err.message;
                } else {
                    result.verify = true;
                    result.message = decoded;
                }
                resolve(result);
            });
        });
    }

}
module.exports = UserService