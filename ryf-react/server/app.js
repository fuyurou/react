const Koa = require('koa')  //负责启动应用
const cors = require('koa-cors') //koa-cors解决跨域问题
const app = new Koa();  //new一下产生一个实例
const router = require('./routers/index');//引入路由
//实例在某个地方进行sifu  跑起来 往上面加组件  
// 组件 中间件 middleware   
//koa根组件 app.use就挂载好了 
// const main = ctx=>{
//     ctx.response.body='Hello World';
// }
// app.use(main)
app.use(cors({
    origin:'http://localhost:3000',
    exposeHeaders:['WWW-Authenticate','Server-Authenticate'],
    maxAge:5,
    credentials:true,
    allowMethods:['GET','POST'], //请求方式
    allowHeader:['Content-Type','Authorization','Accept'] //请求头
})) //这些都是后端给的    cors不要拒绝别人，让别人来访问
app.use(router.routes()) //路由的挂载  也是中间件  大管家 接管一切
app.listen(3006) //监听某个框架 并启动起来

console.log('app statrted at port 3006...')