'use strict';
const Controller = require('egg').Controller;

class UserController extends Controller {
    async login() {
        const {ctx} = this;
        // 组装参数
        const payload = ctx.request.body || {}
        console.log(payload)
        let token = await ctx.service.user.createToken({ id: '1'});
        let isVerify = await ctx.helper.verifyToken(ctx, '1');
        console.log(isVerify)
        ctx.helper.success({ctx,res:token})
    }
}

module.exports = UserController;