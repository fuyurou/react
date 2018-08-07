 ## jsx(react-jsx-plugin)->vnode(createElement)->DOM(render)
插件解构出来的函数  constructor setState render
 
 ## Commponent (render的第三种方式，react-jsx
 vnode.tag functionCounter) -> 标签化组件 -> Counter(extends)-> Commponentl类 -> render(jsx)->reactDOM.render()
 组件实例化得到jsx render 得到dom

 base 给了dom 

 base  dom节点 html解构  base._component = component   _component私有的一个属性 得到一个component 
 Object.assign新状态替换

 3 响应式setState() 为了达到DOM
 ## 响应式编程 setState()  
    为了达到DOM的更新将整个DOM片段都进行替换（假设整个DOM树约100个结点）  
    a. 新生成整个组件的DOM树 重新挂载 整个DOM树约100个DOM 结点    
    b. 只将setState关联的那一小段DOM 在原来的DOM的基础上做一下修改， 将修改反映到DOM上 只需要修改一行  
    html 树，重绘 DOM开销是一般计算开销的100-1000倍  
    replaceChild 就会引发一次DOM树重绘
    重排

React DOM diff算法

需求是： 减少DOM 操作
setState 对应的DOM 部分

setState 返回一个新的vnode -> 跟旧的DOM 对比 将新的内存（虚拟）DOM 旧的DOM 对比？
都是树状结构 ，都是一棵树，采用一个算法，就可以比较出差异点，在相差得地方，进行真实DOM的操作
