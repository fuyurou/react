import React, { Component } from 'react';
import './App.css';

class NoteList extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <ol>
              {this.props.children.map((child,index)=><li key={index}>{child}</li>)}   
            </ol>
        )
    }
}


class App extends Component {
  //return 负责模板 在return之前可以准备一些复杂的模板
  //渲染之前 有一个jsx数组  html直接混入js
  render() {

    return (
      <div className="App">
        <NoteList>
            <span>hello</span>
            <span>world</span>
        </NoteList>
      </div>
    );
  }
}

export default App;
