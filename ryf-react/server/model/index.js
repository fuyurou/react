//model 相当于store  user.js 将数据表orm化 映射为对象 js里面增删改查 回到数据库里面做增删改查
//mysql 就叫sequelize  mgodb就叫mg  orm 翻译
const Sequelize =require('sequelize');
// 数据库映射对象 翻译成数据库听 sql
// koa  数据库json obj   在此之前引入小助手
// 数据库名字 用户名 密码
//
const sequelize= new Sequelize('antd','root','123456',{
    host:'localhost',
    dialect:'mysql',
    operattorAliases:true,
    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:10000
    },
    define:{
        timestamps:false
    }
}) 

sequelize
    .authenticate()
    .then(()=>{
        console.log('Connection has been established successfully')
    })
    .catch(err=>{
        console.log('Unable to connect to the database',err)
    })
module.exports=sequelize