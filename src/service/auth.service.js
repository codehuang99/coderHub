const pool = require("../app/database.js");

class AuthService {
  //去数据库查询用户名密码是否准确
  async getUserNameAndPwd(name, pwd) {
    const statement = "SELECT * FROM users WHERE name=? AND password=?";
    const result = await pool.execute(statement, [name, pwd]);
    return result[0];
  }
}
module.exports = new AuthService();
