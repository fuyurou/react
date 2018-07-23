create-react-app ryf-react

 yarn add prop-types

 this.props.children   slot

 ref  vue react 是一样的

 this.handleClick.bind(this) 返回一个新的函数 得到的this只想当前组件
 react条件状态

 mvvm childre propertype 动态样式

  
  
  yarn add antd axios 命令行配置antd 引入axios
  export default Form.create()(App);  //antd框架使用第二步
  // import React, { Component } from 'react';
// // 对 react ui 阿里的antd 部分引用
// //布局组建Row 按钮Button 弹窗Modal 布局

{...formItemLayout}布局
//chong外面传过来的form得到getFieldDecorator

getFieldDecorator装饰一下

formItem 来自于form.item

//函数运行返回一个函数，在运行 要Decorator的input 交给第二个括号
                           getFieldDecorator()()
                           
madol离开文档流
dataSource数据来源

colums={this.colums}配置项   row里面了很多东西

箭头函数 this指向本身

columns对象里面的属性，放在哪里都可以 是一个数组

row=>row.id每一行 row里面得到id 
confirm() 是或否   用来判定确定的作用

row 相应的数据



前后端通过api交流 后端提供API

req res  cts上下文环境 给用户返回东西

const Koa = require('koa')  //负责启动应用
const app = new Koa();  //new一下产生一个实例
const router = require('./routers/index');
//实例在某个地方进行sifu  跑起来 往上面加组件  
// 组件 中间件 middleware   
//koa根组件 app.use就挂载好了 
const main = ctx=>{
    ctx.response.body='Hello World';
}
app.use(main)
app.listen(3006) //监听某个框架 并启动起来

const router = require('koa-router')();//是一个函数 立即执行一下 得到router  中间件

const router = require('koa-router')();//是一个函数 立即执行一下 得到router  中间件
router.get('/',async (ctx)=>{    //路由对象 配置一下  koa天生支持async  '/' path  首页
    ctx.body='首页';
});
router.get('/users',async (ctx)=>{  //get url  post 表单  函数中间件  用户模块
    ctx.body='用户'
});
module.exports=router
async (ctx)=>{  //get url  post 表单  函数中间件  用户模块
    ctx.body='用户'  就像映射的路由组件

model 连接后端 api 抽象层
 '../model/user' 向vuex里面的用户模块 module

 <Search style={{width: 300}} onChange={this.searchUser.bind(this)}/>做自动建议 

 后端提供数据接口
 exposeHeaders:['WWW-Authenticate','Server-Authenticate'] 授权验证

 CREATE DATABASE antd ;  show databases;   mysql


链接数据库  需要数据库数据库的驱动 
msq关系型数据库  mogdb 没有那么规矩的内容 往里面对数据
yarn add sequelize 数据库映射程序  数据库驱动


 use antd

 //model 相当于store  user.js 将数据表orm化 映射为对象 js里面增删改查 回到数据库里面做增删改查
//mysql 就叫sequelize  mgodb就叫mg  orm 翻译
const Sequelize =require('sequelize');
// 数据库映射对象 翻译成数据库听 sql
// koa  数据库json obj   在此之前引入小助手
const sequelize= new Sequelize('antd','root','123456',{host:'localhost',dialect:'mysql',operattorAliases:true,}) //连接数据库的名字'antd' 'root'账号 {}options dialect支持数据库的类型

yarn add mysql2  安装驱动

npm run server  nodemaon 巴拉巴拉.js


数据库已经连接成功 等待前端发送请求

创建用户 

路由

yarn add koa-body

CREATE TABLE `user` 建表

describe users

drop tabel user;

//message全局组件，在头部 显示一下 组建需要引入
select * from users 在mysql输入 可以看到添加的数据
 // origin:'http://localhost:3000', 报错500 跨域问题 所以 这里注释一下 
    exposeHeaders:['WWW-Authenticate','Server-Authenticate'],// 验证授权


mysql 

CREATE TABLE `users`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
     `username` varchar(255) NOT NULL,
     `age` int(2) NOT NULL,
     `address` varchar(255) NOT NULL,
     `isdelete` int(2) DEFAULT 0,
     PRIMARY KEY (`id`)
     );

use antd
show dbs
describe users
select * from users