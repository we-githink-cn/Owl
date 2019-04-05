'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
    async login() {
        const {ctx} = this;
        let token = await ctx.service.user.createToken({ id: '1'});
        ctx.helper.success({ctx,res:token})
    }
}

module.exports = UserController;