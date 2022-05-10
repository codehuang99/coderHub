const dotenv = require("dotenv"); //引入env的库

dotenv.config();

module.exports = {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;
