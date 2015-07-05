# advanced queries:高级查询

[转载mongodb_shell](http://www.9958.pw/post/mongodb_shell)

```
条件操作符 
$gt : > 
$lt : < 
$gte: >= 
$lte: <= 
$ne : !=、<> 
$in : in 
$nin: not in 
$all: all 
$not: 反匹配(1.3.3及以上版本)

查询 name <> "bruce" and age >= 18 的数据 
db.users.find({name: {$ne: "bruce"}, age: {$gte: 18}});

查询 creation_date > '2010-01-01' and creation_date <= '2010-12-31' 的数据 
db.users.find({creation_date:{$gt:new Date(2010,0,1), $lte:new Date(2010,11,31)});

查询 age in (20,22,24,26) 的数据 
db.users.find({age: {$in: [20,22,24,26]}});

查询 age取模10等于0 的数据 
db.users.find('this.age % 10 == 0'); 
或者 
db.users.find({age : {$mod : [10, 0]}});

匹配所有 
db.users.find({favorite_number : {$all : [6, 8]}}); 
可以查询出{name: 'David', age: 26, favorite_number: [ 6, 8, 9 ] } 
可以不查询出{name: 'David', age: 26, favorite_number: [ 6, 7, 9 ] }

查询不匹配name=B*带头的记录 
db.users.find({name: {$not: /^B.*/}}); 
查询 age取模10不等于0 的数据 
db.users.find({age : {$not: {$mod : [10, 0]}}});

#返回部分字段 
选择返回age和_id字段(_id字段总是会被返回) 
db.users.find({}, {age:1}); 
db.users.find({}, {age:3}); 
db.users.find({}, {age:true}); 
db.users.find({ name : "bruce" }, {age:1}); 
0为false, 非0为true

选择返回age、address和_id字段 
db.users.find({ name : "bruce" }, {age:1, address:1});

排除返回age、address和_id字段 
db.users.find({}, {age:0, address:false}); 
db.users.find({ name : "bruce" }, {age:0, address:false});

数组元素个数判断 
对于{name: 'David', age: 26, favorite_number: [ 6, 7, 9 ] }记录 
匹配db.users.find({favorite_number: {$size: 3}}); 
不匹配db.users.find({favorite_number: {$size: 2}});

$exists判断字段是否存在 
查询所有存在name字段的记录 
db.users.find({name: {$exists: true}}); 
查询所有不存在phone字段的记录 
db.users.find({phone: {$exists: false}});

$type判断字段类型 
查询所有name字段是字符类型的 
db.users.find({name: {$type: 2}}); 
查询所有age字段是整型的 
db.users.find({age: {$type: 16}});

对于字符字段，可以使用正则表达式 
查询以字母b或者B带头的所有记录 
db.users.find({name: /^b.*/i});

$elemMatch(1.3.1及以上版本) 
为数组的字段中匹配其中某个元素

Javascript查询和$where查询 
查询 age > 18 的记录，以下查询都一样 
db.users.find({age: {$gt: 18}}); 
db.users.find({$where: "this.age > 18"}); 
db.users.find("this.age > 18"); 
f = function() {return this.age > 18} db.users.find(f);

排序sort() 
以年龄升序asc 
db.users.find().sort({age: 1}); 
以年龄降序desc 
db.users.find().sort({age: -1});

限制返回记录数量limit() 
返回5条记录 
db.users.find().limit(5); 
返回3条记录并打印信息 
db.users.find().limit(3).forEach(function(user) {print('my age is ' + user.age)}); 
结果 
my age is 18 
my age is 19 
my age is 20

限制返回记录的开始点skip() 
从第3条记录开始，返回5条记录(limit 3, 5) 
db.users.find().skip(3).limit(5);

查询记录条数count() 
db.users.find().count(); 
db.users.find({age:18}).count(); 
以下返回的不是5，而是user表中所有的记录数量 
db.users.find().skip(10).limit(5).count(); 
如果要返回限制之后的记录数量，要使用count(true)或者count(非0) 
db.users.find().skip(10).limit(5).count(true);

分组group() 
假设test表只有以下一条数据 
{ domain: "www.mongodb.org" 
, invoked_at: {d:"2009-11-03", t:"17:14:05"} 
, response_time: 0.05 
, http_action: "GET /display/DOCS/Aggregation" 
} 
使用group统计test表11月份的数据count:count(*)、total_time:sum(response_time)、avg_time:total_time/count; 
db.test.group( 
{ cond: {"invoked_at.d": {$gt: "2009-11", $lt: "2009-12"}} 
, key: {http_action: true} 
, initial: {count: 0, total_time:0} 
, reduce: function(doc, out){ out.count++; out.total_time+=doc.response_time } 
, finalize: function(out){ out.avg_time = out.total_time / out.count } 
} );

[ 
{ 
"http_action" : "GET /display/DOCS/Aggregation", 
"count" : 1, 
"total_time" : 0.05, 
"avg_time" : 0.05 
} 
]
```