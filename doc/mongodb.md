
# Install MongoDB on OS X

- mongoose:让NodeJS更容易操作Mongodb数据库 
    + [Mongodb官网](http://mongoosejs.com/) 
    + [Mongodb安装教程](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/) 
    + [brew官网](http://brew.sh/index_zh-cn.html) 用来安装mongodb
    + [robomongo](http://www.robomongo.org/) 跨平台客户端

## 使用 brew 安装

 -  `brew update` 更新brew
 -  `brew install mongodb` 安装mongodb
 -  `brew install mongodb --with-openssl` MongoDB的构建从源代码使用TLS / SSL支持  
 -  `brew install mongodb --devel`安装的MongoDB的最新的开发版本


## 运行MongoDB

```
# 创建文数据文件夹
$ mkdir -p /data/db

$ sudo mongod

$ mongo   # Run MongoDB
```

注意：  

更新brew 如果没有反应，可以用VPS或者卸载重装。如果彻底打不开那就科学上网

### 卸载brew

```bash
rm -rf /usr/local/Cellar /usr/local/.git && brew cleanup
```
