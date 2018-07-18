import React from 'react';
//react 模板编译 有一个专门的库 react-dom
import ReactDOM from 'react-dom';
import './index.css'; //webpack引入的全局css
import App from './App';//应用组件app 可引入其他组件
// import registerServiceWorker from './registerServiceWorker'; //可接受浏览器端的推送

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
