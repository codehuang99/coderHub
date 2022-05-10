const pool = require("../app/database.js");

class UserService {
  async create(user) {
    const { name, password } = user;

    const statement = "INSERT INTO users (name,password) VALUES (?,?)";

    //执行语句
    const result = await pool.execute(statement, [name, password]);

    return result;
  }

  //查询数据库的用户名是否一样
  async getUserByName(name) {
    const statement = `SELECT * FROM users WHERE name = ?`;
    const result = await pool.execute(statement, [name]);
    return result[0];
  }
}

module.exports = new UserService();
