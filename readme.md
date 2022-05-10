## 初始化步骤

1. 新建git仓库后，在本地新建文件夹,git init初始化git
2. npm init 项目初始化
3. 安装koa
4. 安装dotenv（可以使用.env文件）
5. 安装koa-router
6. 安装koa-bodyparser
6. 安装jsonwebtoken
7. 安装mysql2
8. Git push到仓库



## 注册接口

+ 用户注册接口流程：

  + 注册用户路由router编写
  + 处理函数的控制权controller编写
  + 操作数据库的service编写

+ 数据库连接操作：mysql2

  + 创建数据库连接
  + 测试数据库是否连接成功

+ 注册用户校验

  + 用户名或者密码不能为空
  + 用户名没有被注册过

+ 密码加密存储

  

## 登陆接口

+ 用户登陆接口流程：
  + 注册用户路由router编写
  + 处理函数的控制权controller编写
  + 操作数据库的service编写
+ 登陆用户校验
  + 用户名或者密码不能为空
  + 用户名和密码正确
+ 登陆成功返回验证
  + Token令牌(jet)
    + 生成私钥：genrsa -out private.key 1024
    + 生成公钥:   rsa -in private.key -pubout -out public.key

