import React, { Component } from 'react';
import './App.css';

class Hello extends Component {
    state={
        opacity:1
    }
    componentDidMount(){  //生命周期
        setInterval(()=>{  //this指针指向？ 用箭头函数
            let opacity = this.state.opacity;
            opacity -=.05;
            if(opacity<0.1){
                opacity=1
            }
            this.setState({
                opacity:opacity
            })
        },1000)
    }
    render(){
        return(
            <div style={{opacity:this.state.opacity}}>
                Hello {this.props.name}
            </div>
        )
    }
}
// 请让组件的文字渐隐渐变   opacity 改变 1000 0 ->1
class App extends Component {
  //return 负责模板 在return之前可以准备一些复杂的模板
  render() {
    
    return (
      <div className="App">
        <Hello name="world"/>
      </div>
    );
  }
}

export default App;
