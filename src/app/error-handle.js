const {
  USER_NAME_OR_PASSWORD_IS_REQUIRE,
  USER_ALREADT_EXISTS,
  USER_NAME_AND_PASWWORD_ERROR,
  AUTH_ERROR,
} = require("../constants/error-types.js");

const errorHandle = (error, ctx) => {
  let status, message;
  switch (error.message) {
    case USER_NAME_OR_PASSWORD_IS_REQUIRE:
      status = 400;
      message = "用户名或密码不能为空";
      break;
    case USER_ALREADT_EXISTS:
      status = 409;
      message = "用户名已存在";
      break;
    case USER_NAME_AND_PASWWORD_ERROR:
      status = 400;
      message = "用户名或者密码错误";
      break;
    case AUTH_ERROR:
      status = 401;
      message = "未授权，无效token～";
      break;
    default:
      status = 404;
      message = "not found";
  }
  ctx.message = status;
  ctx.body = message;
};
module.exports = errorHandle;
