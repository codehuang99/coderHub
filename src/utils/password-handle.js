const crypto = require("crypto"); //引入md5库

//密码加密
const md5password = (password) => {
  const md5 = crypto.createHash("md5");
  const result = md5.update(password).digest("hex"); //16进制
  return result;
};

module.exports = {
  md5password,
};
