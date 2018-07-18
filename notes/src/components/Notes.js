// import React,{Component} from 'react';
// import {db,loadCollection} from '../database'
// import Note from './Note';
// class Notes extends Component{
//     constructor(props){
//         super(props) //让父类执行它的构造函数  弗雷什component component的构造函数执行一下
//         this.getInitialData() //找数据
//     }
//     getInitialData(){
//         loadCollection('notes') //数据查询
//             .then(collection=>{
//                 // console.log(collection)
//         //    collection.insert([
//         //     {
//         //         text:'Hello ~'
//         //     },
//         //     {
//         //         text:'hola ~'
//         //     }
//         // ]);
//         // db.saveDatabase();
//         const entities = collection.chain()
//             .find() //所有的都查出来
//             .simplesort('$loki','isdesc')  //$loki 默认产生的一个字段就是数据库id   'isdesc'倒叙排序
//             .data()
//             console.log(entities)
//       })
//     }

//     state={ //当前组件的状态对象  Vue 是 data
//         entities:[
//             '邪不压正,如何?',
//             '我不是药神,印度什么药都有'
//         ]
//     }
//     createEntry(){
//         // console.log('add')
//         // console.log(this)
//         console.log(this.state.entities)
//     }
//     destroyEntity(entity){
//         console.log(entity);
//     }
//     render(){
//         // react 独有的JSX 模板引擎
//         // 在js 里直接写html 
//         // 为什么类名 react className
//         //html -> js node 是会被编译成js的, class是一个关键字
//         const entities = this.state.entities;
//         const noteItems = entities.map((entity,index)=> //得到JSX数组
//             // <li key={index}>{entity}</li>
//             <Note key={index} entity={entity} destroyEntity={this.destroyEntity}/> //给子组件传值 props
//         )
//         console.log(noteItems)
//         return(
//             <div className="ui container notes">
//                 <h4 className="ui horizontal divider header">
//                     <i className="paw icon"></i>
//                     Notes App_React.js
//                 </h4>
//                 <button className="ui right floated basic violet button" onClick={this.createEntry.bind(this)}>添加笔记</button>
//                 <div className="ui divided items">
//                     {noteItems}
//                     {!this.state.entities.length && <span className="ui small disabled header">还没有笔记,请先添加</span>}
//                 </div>
//             </div>
//         )
//     }
// }

// export default Notes
// import React, { Component } from 'react';
// import { db, loadCollection } from '../database'
// import Note from './Note';

// class Notes extends Component {
//   constructor (props) {
//     super(props)
//     this.getInitialData()
//   }
//   getInitialData () {
//     loadCollection('notes')
//       .then(collection => {
//         // console.log(collection)
//         // collection.insert([
//         //     {
//         //         text:'Hello ~'
//         //     },
//         //     {
//         //         text:'hola ~'
//         //     }
//         // ]);
//         // db.saveDatabase();
//         const entities = collection.chain()
//             .find() //所有的都查出来
//             .simplesort('$loki','isdesc')  //$loki 默认产生的一个字段就是数据库id   'isdesc'倒叙排序
//             .data()
//             // console.log(entities)
//             this.setState({ // key value相同 所以省掉
//                 entities 
//             })
//       })
//   }
//   // satet vue data
//   state = {
//     entities: []
//   }
//   createEntry () {
//     console.log(this.state.entities)
//   }
//   destoryEntity (entity) {
//     console.log(entity);
//   }
//   render () {
//     // react 独有的JSX 模板引擎
//     // 在js 里直接写html 
//     // react  className 
//     // html-》 js node 是会被编译成为js的， class 是一个关键字。
//     const entities = this.state.entities;
//     const noteItems = entities.map((entity, index) => 
//       <Note 
//         key={ index }
//         entity={entity}
//         destoryEntity={ this.destoryEntity }
//       />
//     )
//     // console.log(noteItems);


//     return (
//       <div className="ui container notes">
//         <h4 className="ui horizontal divider header">
//           <i className="paw icon"></i>
//           Notes App _ React.js
//         </h4>
//         <button className="ui right floated basic violet button"
//         onClick={ this.createEntry.bind(this) }
//         >
//           添加笔记
//         </button>
//         <div className="ui divided items">
//           { noteItems }
//           { !this.state.entities.length && <span className="ui small disabled header">还没有笔记，请先添加</span>}
//         </div>
//       </div>
//     )
//   } 
// }

// export default Notes
import React, { Component } from 'react';
import { db, loadCollection } from '../database'
import Note from './Note';

class Notes extends Component {
  constructor (props) {
    super(props)
    this.getInitialData()
  }
  getInitialData () {
    loadCollection('notes')
      .then(collection => {
        // console.log(collection)
        // collection.insert([
        //   {
        //     text: 'hello ~'
        //   }, 
        //   {
        //     text: 'hola ~'
        //   }
        // ]);
        // db.saveDatabase();
        const entities = collection.chain()
          .find()
          .simplesort('$loki', 'isdesc')
          .data()
        // console.log(entities);
        this.setState({
          entities
        })

      })
  }
  // satet vue data
  state = {
    entities: []
  }
  createEntry () {
    // console.log(this.state.entities)
    loadCollection('notes')
        .then((collection)=>{
            const entity = collection.insert({
                text:''
            })
            db.saveDatabase();
                this.setState((prevState)=>{
                    const _entities = prevState.entities;
                    _entities.unshift(entity); 
                    return {
                        entities:_entities
                    }
                })
        })
  }
  destoryEntity (entity) {
    console.log(entity);
    const _entities = this.state.entities.filter((_entity)=>{
        return _entity.$loki !== entity.$loki
        // return _entity.text !== entity.text
    });
    this.setState({
        entities: _entities
    })
  }
  render () {
    // react 独有的JSX 模板引擎
    // 在js 里直接写html 
    // react  className 
    // html-》 js node 是会被编译成为js的， class 是一个关键字。
    const entities = this.state.entities;
    const noteItems = entities.map((entity) => 
      <Note 
        key={ entity.$loki }
        entity={entity}
        destoryEntity={ this.destoryEntity.bind(this) }
      />
    )
    // console.log(noteItems);


    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon"></i>
          Notes App _ React.js
        </h4>
        <button className="ui right floated basic violet button"
        onClick={ this.createEntry.bind(this) }
        >
          添加笔记
        </button>
        <div className="ui divided items">
          { noteItems }
          { !this.state.entities.length && <span className="ui small disabled header">还没有笔记，请先添加</span>}
        </div>
      </div>
    )
  } 
}

export default Notes
