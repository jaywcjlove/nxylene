Install MongoDB on OS X
-----------------------

# 使用 brew 安装

使用Homebrew包管理器

```bash
$ brew update  # 更新brew
$ brew install mongodb  # 安装mongodb
$ brew install mongodb --with-openssl  # MongoDB的构建从源代码使用TLS / SSL支持  
$ brew install mongodb --devel  #安装的MongoDB的最新的开发版本
```

使用MacPorts，你可以这样安装：

```
$ sudo port install mongodb 
```

# 运行MongoDB


## 开机启动

To have launchd start mongodb at login:
    `ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents`
Then to load mongodb now:
    `launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist`


## 立即启动运行

运行MongoDB

`mongod --config /usr/local/etc/mongod.conf`


```bash
# 创建文数据文件夹
$ mkdir -p /data/db

$ sudo mongod #mongod 是 MongoDB 系统的主要后台进程。它处理数据请求，管理数据访问，执行后台管理操作。

$ mongo   #进行数据库的一些操作
```


# MongoDB 

## 常用命令 

`db.help()` 当前数据库支持哪些方法  
`show dbs`  查看所有数据库列表  
`db.nxylene.find({type:"contact"})` 列出`nxylene`对象type === "contact"  
`db.auth(username, password)` 访问认证   
`db.cloneDatabase(fromhost)` 克隆数据库  
`db.copyDatabase(fromdb, todb, fromhost)`  复制数据库  
`db.createCollection(name, {size: ..., capped: ..., max : ... })` 创建表  
`db.getCollectionNames()`  获取当前数据库的表名  
`db.removeUser(username)` 删除数据库用户  
`db.repairDatabase()` 修复数据库  
`db.dropDatabase()` 删除当前数据库   

## 删除表数据集


### 删除一条数据

```
> db.test_ttlsa_com.remove({"ban_friends_id":"BAN121113"})    
```

### 删除所有数据

```
> db.test_ttlsa_com.count()    
2    
> db.test_ttlsa_com.remove({})    
> db.test_ttlsa_com.count()    
0    
```

### 删除集合

```
> show collections    
system.indexes    
test_ttlsa_com    
> db.test_ttlsa_com.drop()    
true    
> show collections    
system.indexes    
```

### 删除整个数据库

```
> show dbs    
local   0.078125GB    
ttlsa_com       0.203125GB    
> db    
ttlsa_com    
> db.ttlsa_com.getDB()    
ttlsa_com    
> show collections    
system.indexes    
> db.dropDatabase()    
{ "dropped" : "ttlsa_com", "ok" : 1 }    
> db    
ttlsa_com    
> show dbs    
local   0.078125GB    
```

## 写入数据库

insert()方法：下面是在inventory集合中插入一个三个字段的文档    

`db.inventory.insert( { _id: 10, type: "misc", item: "card", qty: 15 })`   

update()方法：调用update()方法使用upsert标志创建一个新文档当没有匹配查询条件的文档时。下面的例子当inventory集合中没有包含{type:"books",item:"journal"}的文档时创建一个新文档。  

```
db.inventory.update(
     { type: "book", item : "journal" },
     { $set :     { qty: 10 } },
     { upsert :true     }
)
```

save()方法:使用save()方法插入一个文档，通过该方法保存一个不包含_id字段的文档或者包含_id字段但该字段值不存在集合中的文档。  

```
db.inventory.save( { type: "book", item: "notebook", qty: 40 } )
```

### mongod
mongod 是 MongoDB 系统的主要后台进程。它处理数据请求，管理数据访问，执行后台管理操作。  
该命令的命令行选项主要用于测试：在场景操作中，使用配置文件选项来控制数据库的行为。  
[更多官方文档信息](http://docs.mongodb.org/manual/reference/program/mongod/)


### mongos
mongos 就是 "MongoDB Shard" 的简写，它是一个针对MongoDB分片配置的路由服务，该服务处理来自应用层的查询请求，确定数据在分片集群中的位置，以完成这些操作。从应用的角度来看，一个mongos实例表现得跟任何其他MongoDB实例完全相同。
[官网建议千万不要修改这个二进制名字](http://docs.mongodb.org/manual/reference/program/mongos/)



注意：  

更新brew 如果没有反应，可以用VPS或者卸载重装。如果彻底打不开那就科学上网

## 卸载brew

```bash
rm -rf /usr/local/Cellar /usr/local/.git && brew cleanup
```


# help

```
    db.help()                    #显示数据库操作命令，里面有很多的命令
    db.mycoll.help()             #help on collection methods
    sh.help()                    #sharding helpers
    rs.help()                    #replica set helpers
    help admin                   #administrative help
    help connect                 #connecting to a db help
    help keys                    #key shortcuts
    help misc                    #misc things to know
    help mr                      #mapreduce

    show dbs                     #show database names
    show collections             #show collections in current database
    show users                   #show users in current database
    show profile                 #show most recent system.profile entries with time >= 1ms
    show logs                    #show the accessible logger names
    show log [name]              #prints out the last segment of log in memory, 'global' is default
    use <db_name>                #set current database
    db.foo.find()                #list objects in collection foo
    db.foo.find( { a : 1 } )     #list objects in foo where a == 1
    it                           #result of the last line evaluated; use to further iterate
    DBQuery.shellBatchSize = x   #set default number of items to display on shell
    exit                         #quit the mongo shell

```


# 相关资料

- mongoose:让NodeJS更容易操作Mongodb数据库 
    + [MongoDB官网](http://mongoosejs.com/) 
    + [MongoDB中文网站](http://www.mongoing.com/)
    + [MongoDB的GitHub](https://github.com/mongodb)
    + [MongoDB的jira](https://jira.mongodb.org)
    + [MongoDB的Google Groups](https://groups.google.com/d/forum/mongodb-user)
    + [MongoDB安装教程](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/) 
    + [brew官网](http://brew.sh/index_zh-cn.html) 用来安装mongodb
    + [robomongo](http://www.robomongo.org/) 跨平台客户端
