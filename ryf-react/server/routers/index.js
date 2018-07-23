const router = require('koa-router')();//是一个函数 立即执行一下 得到router  中间件
const koaBody = require('koa-body');
const User = require('../model/user');
router.get('/',async (ctx)=>{    //路由对象 配置一下  koa天生支持async  '/' path  首页
    ctx.body='首页';
});
router.get('/users',async (ctx)=>{
    const users = await User.findAll({
        where:{ //查询条件
            isdelete:0
        }
    })
    ctx.body=users
});
// router.get('/users',async (ctx)=>{  //get url  post 表单  函数中间件  用户模块
//     const user ={
//         name:'zk',
//         age:18
//     }
//     ctx.body=user
//     // ctx.body='用户'
// });
//ctx.body可以得到所有东西
router.post('/user',koaBody(),async(ctx)=>{
    //后端要拿到前端传来的post数据  get 路由 post 一定有一个  表单传来的body
    // body 请求体
    // ctx 上下文环境 
    const user = await User.build(ctx.request.body).save();   //把数据对象build给模型  异步的 数据库通信  koa 原生支持async await

    // console.log(ctx.request.body)
    // ctx.body={
    //     status:'ok'
    // }
    ctx.body = user; // user 是对象
    
})
module.exports=router
