const service = require("../service/user.service.js");

class UserController {
  //注册用户业务逻辑
  async create(ctx, next) {
    //获取用户参数--post的json数据，在main.js已经用解析body-parser解析了
    const user = ctx.request.body;

    //执行语句
    const res = await service.create(user);

    //返回数据
    ctx.body = res;
  }
}

module.exports = new UserController();
