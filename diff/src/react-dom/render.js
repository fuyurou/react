// import createElement from "../react/create-element";
// import { setAttribute } from './dom.js';

// //虚拟节点 render方法挂载在盒子container(root)

// /**
//  * 将虚拟 DOM 解析成真实 DOM
//  * @params vnode 虚拟 DOM
//  * @return 返回 DOM
//  */
// function _render(vnode){
//     // console.log(vnode);
//     // return document.createTextNode('render')  快速实现一下
//     // 1.render方法递归 将结点转成dom, 子节点递归 ，子节点递归的条件要有出口,出口就是文本节点textNode
//     // 2.节点类型 三种： 
//     // 文本节点 return createTextNode()
//     // 标签节点 createElement attr children设置（递归_render)
//     // 3. Commponent render(return jsx)
//     //拿到一个新的jsx再次render
//     //_render 私有方法
//     if (vnode === undefined || vnode === null || typeof vnode === 'boolean')
//     vnode = '';
//    //文本节点
//     if (typeof vnode === 'string') {
//       let textNode = document.createTextNode(vnode);
//       return textNode;
//     }
//     // <Counter />  不是正常标签, vnode.tag= function Counter(){}
//     //vnode.tag是一个函数
//     if(typeof vnode.tag === 'function'){
//         // console.log(vnode);
//         // return document.createTextNode('component');
//         const component = createComponent(vnode.tag,vnode.attrs);//返回Counter组件 render方法得到jsx
//     }
//     const dom = document.createElement(vnode.tag);
//     if (vnode.attrs) {
//       Object.keys(vnode.attrs).forEach(key => {
//         const value = vnode.attrs[key];
//         // dom.setAttribute(key, value);
//         setAttribute(dom, key, value);
//       })
//     }
//   //循环递归 输出来
//     if(vnode.children){
//         vnode.children.forEach(child => render(child,dom));
//     }
  
//     return dom;
//   }

//   //组件实例里面调用一下props设置一下
//   function createComponent(component,props){
//       let inst; //创建对象返回对象 
//       //component 任何一个组建
//       if(component.prototype && component.prototype.render){
//           inst = new component(props);   
//       }else{
//         inst = new Component(props); //还没有构建组建从基类里面
//         //函数立即变成组建  及时给的方法
//         inst.constructor
//       }
//   }
// export function render(vnode,container){
//     // console.log(vnode,container)
//     //_render 私有方法将对象一个个解析成真实dom
//     return container.appendChild(_render(vnode));

// }

import { setAttribute } from './dom.js'
import Component from '../react/component.js';
/**
 * 将虚拟DOM 变真实DOM
 * @params vnode 虚拟DOM, 
 * @return 返回DOM
 */

function _render (vnode) {
  // console.log(vnode);
  // return document.createTextNode('render');
  // 1. 递归 将结点转成dom ,子结点递归，出口就是文本结点
  // 2. 节点类型 三种： 
  // 文本结点 return createTextNode()
  // 标签结点 createElement attr chilren设置（递归_render）
  // 3. Component render(return jsx)
  // render()
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean')
  vnode = '';
  if (typeof vnode === 'number') {
    console.log(vnode)
    vnode = String(vnode);//强制类型转换  数值型装换成string
  }
  if (typeof vnode === 'string') {
    let textNode = document.createTextNode(vnode);
    return textNode;
  }
  // <Counter />  不是正常标签, vnode.tag= function Counter(){}
  if (typeof vnode.tag === 'function') {
    // console.log(vnode);
    // return document.createTextNode('component');
    const component = createComponent(vnode.tag, vnode.attrs);
    setComponentProps(component, vnode.attrs);
    return component.base;
  }

  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      setAttribute(dom, key, value);
    })
  }

  if (vnode.children) {
    vnode.children.forEach(child => render(child, dom));
  }

  return dom;
}

function setComponentProps (component, props) {
  component.props = props;
  renderComponent(component);
}

// 将component里的jsx转为DOM 他还会在setState时调用 
export function renderComponent(component) {
  let base; //jsx=> DOM
  const renderer = component.render();
  base = _render(renderer); //真实dom节点
  //非第一次渲染
  if(component.base && component.base.parentNode){
      component.base.parentNode.replaceChild(base,component.base)
  }
  component.base = base; //
  base._component = component;
}

function createComponent(component, props) {
  let inst;
  if (component.prototype && component.prototype.render) {
    inst = new component(props);
  } else {
    inst = new Component(props);
    inst.constructor = component;
    inst.render = function() {
      return this.constructor(props);
    }  
  }
  return inst;
}
export function render(vnode, container) {
  return container.appendChild(_render(vnode));
}
