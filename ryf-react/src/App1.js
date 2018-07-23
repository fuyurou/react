import React, { Component } from 'react';
import './App.css';

class App extends Component {
  //return 负责模板 在return之前可以准备一些复杂的模板
  render() {
    const names = ['Alice','Emily','曾凯大帝']
    return (
      <div className="App">
      <ul>
        {
          names.map((name,index)=>{
            return (
              <div key={index}>Hello,{name}</div>
            )
          })
        }
      </ul>
      </div>
    );
  }
}

export default App;


