const Router = require("koa-router");
const { create } = require("../controller/user.controller.js");
const {
  verifyUser,
  handlePassword,
} = require("../middleware/user.middleware.js");

const userRouter = new Router({ prefix: "/users" });

//注册用户接口，create为业务逻辑,verifyUser是专门处理数据是否符合的中间件,只有通过了才会执行create
userRouter.post("/", verifyUser, handlePassword, create);

module.exports = userRouter;
