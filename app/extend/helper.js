const moment = require('moment')

// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss')

/// 获取 Token
exports.getAccessToken = ctx => {
  let bearerToken = ctx.request.header.authorization;
  return bearerToken && bearerToken.replace("Bearer ", "");
};

// 校验 Token
exports.verifyToken = async (ctx, userId) => {
  let token = this.getAccessToken(ctx);
  let verifyResult = await ctx.service.user.verifyToken(token);
  if (!verifyResult.verify) {
    ctx.helper.error(ctx, 401, verifyResult.message);
    return false;
  }
  if (userId != verifyResult.message.id) {
    ctx.helper.error(ctx, 401, "用户 ID 与 Token 不一致");
    return false;
  }
  return true;
};

exports.success = ({ ctx, res = null, msg = '请求成功' })=> {
  ctx.body = {
    code: 0,
    data: res,
    msg
  }
  ctx.status = 200
}

// 处理失败响应
exports.error = (ctx, code, message) => {
  ctx.body = {
    code: code,
    message: message
  };
  ctx.status = code;
};