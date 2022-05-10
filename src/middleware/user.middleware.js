const {
  USER_NAME_OR_PASSWORD_IS_REQUIRE,
  USER_ALREADT_EXISTS,
} = require("../constants/error-types.js");
const service = require("../service/user.service.js");
const { md5password } = require("../utils/password-handle.js");

//验证用户名密码中间件
const verifyUser = async (ctx, next) => {
  //获取请求的数据{用户名，密码}
  const { name, password } = ctx.request.body;
  //判断用户名或密码不能为空
  if (!name || !password) {
    const error = new Error(USER_NAME_OR_PASSWORD_IS_REQUIRE);
    return ctx.app.emit("error", error, ctx);
  }
  //判断用户名没有被注册过
  const res = await service.getUserByName(name);
  if (res.length) {
    const error = new Error(USER_ALREADT_EXISTS);
    return ctx.app.emit("error", error, ctx);
  }

  await next();
};

//密码加密中间件
const handlePassword = async (ctx, next) => {
  let { password } = ctx.request.body;
  ctx.request.body.password = md5password(password);

  await next();
};

module.exports = {
  verifyUser,
  handlePassword,
};
