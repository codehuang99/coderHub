const Koa = require("koa");
const userRouter = require("./user.router.js");

const app = new Koa();
app.use(userRouter.routes());
