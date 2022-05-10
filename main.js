const Koa = require("koa"); //引入koa框架
const bodyParser = require("koa-bodyparser");
const config = require("./src/app/config.js");
const errorHandle = require("./src/app/error-handle.js");
require("./src/app/database.js");

const userRouter = require("./src//router/user.router.js");

const app = new Koa(); //初始化koa框架

app.use(bodyParser()); //post数据解析

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

//监听错误
app.on("error", errorHandle);

//开启监听
app.listen(config.APP_PORT, () => {
  console.log(`koa服务器开启成功,在${config.APP_PORT}端口访问`);
});
