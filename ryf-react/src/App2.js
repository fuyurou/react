import React, { Component } from 'react';
import './App.css';

class HelloMessage extends Component{
    render(){
        return <h1>Hello {this.props.name}</h1>
    }
}

class App extends Component {
  //return 负责模板 在return之前可以准备一些复杂的模板
  //渲染之前 有一个jsx数组  html直接混入js
  render() {
    const arr = [
        <h1 key="1">Hell World</h1>,
        <h2 key="2">React is awesome</h2>
    ]
    return (
      <div className="App">
      <HelloMessage name="John"/>
      <ul>
        {
          arr
        }
      </ul>
      </div>
    );
  }
}

export default App;
