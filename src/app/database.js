const mysql = require("mysql2");
const config = require("./config.js");

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = config;

const pool = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  database: MYSQL_DATABASE,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
});

pool.getConnection(function (err, conn) {
  conn.connect((err) => {
    if (err) {
      console.log("启动数据库失败:", err);
    } else {
      console.log("启动数据库成功");
    }
  });
});

module.exports = pool.promise();
