const Router = require("koa-router");
const { login, test } = require("../controller/auth.controller.js");
const {
  verifyAuthLogin,
  verifyAuth,
} = require("../middleware/auth.middleware.js");

const authRouter = new Router({ prefix: "/auth" });

authRouter.post("/login", verifyAuthLogin, login);
authRouter.get("/test", verifyAuth, test);

module.exports = authRouter;
