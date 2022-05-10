const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");

class AuthController {
  async login(ctx, next) {
    const { id, name } = ctx.user;
    const privateKey = fs.readFileSync(
      path.resolve(__dirname, "../keys/private.key")
    );
    // 将登陆的用户信息生成token，使用私钥进行非对称加密，过期时间为 2h
    const token = jwt.sign({ id, name }, privateKey, {
      algorithm: "RS256", //采用的算法
      expiresIn: "2h", //过期时间
    });
    ctx.body = {
      id,
      name,
      token,
    };
  }

  async test() {
    console.log("success");
  }
}

module.exports = new AuthController();
