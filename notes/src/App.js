import React, { Component } from 'react';
//默认输出React 还有一些其他的 解构出来就好
import Notes from './components/Notes' //笔记应用
import 'semantic-ui-css/semantic.min.css'
import './App.css'; //style

// .vue 三部分 template js style
// react 后缀是 .js 负责输出一个组件类 使用继承的概念 template ?js 语法 render
class App extends Component {
  //return 负责模板
  render() {
    return (
      <Notes/>
    );
  }
}

export default App;
