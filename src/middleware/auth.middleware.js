const fs = require("fs");
const path = require("path");
const {
  USER_NAME_OR_PASSWORD_IS_REQUIRE,
  USER_NAME_AND_PASWWORD_ERROR,
  AUTH_ERROR,
} = require("../constants/error-types.js");
const { md5password } = require("../utils/password-handle.js");
const service = require("../service/auth.service.js");
const jwt = require("jsonwebtoken");

//处理登陆验证
const verifyAuthLogin = async (ctx, next) => {
  //获取用户名和密码
  const { name, password } = ctx.request.body;
  //判断用户名密码是否为空
  if (!name || !password) {
    const error = new Error(USER_NAME_OR_PASSWORD_IS_REQUIRE);
    return ctx.app.emit("error", error, ctx);
  }

  //判断用户名密码是否正确
  const newPwd = md5password(password);
  const res = await service.getUserNameAndPwd(name, newPwd);
  if (!res.length) {
    const error = new Error(USER_NAME_AND_PASWWORD_ERROR);
    return ctx.app.emit("error", error, ctx);
  }
  ctx.user = res[0];
  await next();
};

//校验token
const verifyAuth = async (ctx, next) => {
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");

  const publicKey = fs.readFileSync(
    path.resolve(__dirname, "../keys/public.key")
  );
  try {
    // 根据公钥验证token
    // 验证成功则返回注册token的原始信息
    const res = jwt.verify(token, publicKey);
    ctx.user = res;
    await next();
  } catch (err) {
    // 验证失败则返回err
    // 处理非法token、过期token等问题
    const error = new Error(AUTH_ERROR);
    return ctx.app.emit("error", error, ctx);
  }
};

module.exports = {
  verifyAuthLogin,
  verifyAuth,
};
