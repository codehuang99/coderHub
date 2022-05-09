const Koa = require("koa"); //引入koa框架

const app = new Koa(); //初始化koa框架

//开启监听
app.listen(8080, () => {
  console.log("koa服务器开启成功");
});
