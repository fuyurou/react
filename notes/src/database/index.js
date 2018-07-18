// import Loki from 'lokijs'  //提供一些数据的接口
// // db配置 , 初始化,连接及数据查询
// //db是句柄 代表数据库
// // new的过程就得到这个数据库
// //数据库名(一个项目一个库)->collections(tabel的别名)-> rows(数据记录)->colums(列名)
// // sql 查询,典型的异步操作,用promise 来封装吧,连接数据要时间,查询要时间,返回结果,路上要时间

// export const db = new Loki('notes',{  //db建立一个数据库  Loki来创建
//     autoload:true,
//     autoloadCallback:databaseInitialize,
//     autosave:true,
//     autosaveInterval:3000,
//     persistenceMethod:'localStorage'
// })

// function databaseInitialize(){
//     const notes = db.getCollection('notes');
//     if(notes === null){
//         db.addCollection('notes')
//     }
// }

// export function loadCollection(collection){
//     return new Promise(resolve=>{
//         db.loadDatabase({}, () => {
//             const _collection = db.getCollection(collection) || db.addCollection(collection);
//             resolve(_collection)
//           })      
//     })
// }
import Loki from 'lokijs';
// db 配置，初始化,连接及数据查询
// db 句柄 代表着数据库 数据库名(一个项目一个库)->collections(table的别称,)->rows(数据记录)-> columns(列名)
// sql查询, 典型的异步操作， 用promise 来封装吧， 连接数据库要时间，查询要时间， 反回结果，要路上的时间

export const db = new Loki('notes', {
  autoload: true,
  autoloadCallback: databaseInitialize,
  autosave: true,
  autosaveInterval: 3000,
  persistenceMethod: 'localStorage'
})

function databaseInitialize () {
  const notes = db.getCollection('notes');
  if (notes === null) {
    db.addCollection('notes')
  }
}

export function loadCollection(collection) {
  return new Promise(resolve => {
    db.loadDatabase({}, () => {
      const _collection = db.getCollection(collection) || db.addCollection(collection);
      resolve(_collection);
    })
  })
}
