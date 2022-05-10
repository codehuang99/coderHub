const {
  USER_NAME_OR_PASSWORD_IS_REQUIRE,
  USER_ALREADT_EXISTS,
} = require("../constants/error-types.js");
const service = require("../service/user.service.js");

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

module.exports = {
  verifyUser,
};
