import React, { Component } from 'react';
import './App.css';

class LikeButton extends Component{
    state ={
        liked:false
    }
    handleClick(){
        this.setState({
            liked:!this.state.liked
        })
    }
    render(){
        const text = this.state.liked? 'like':'don\'t like'
        return(
            // {text} 默认的状态 根据点击事件产生一个值的改变
            <p onClick={()=>this.handleClick()}>
                You {text} this.cLick to toggle
            </p>
        )
    }
}

class App extends Component {
    handleClick(){
        this.refs.myTextInput.focus()  //refs 少了一个$
    }
  render() {
    
    return (
        //给输入框加一个钩子
      <div className="App">
      <LikeButton/>
        <input type="text" ref="myTextInput"/>
        <input type="button" value="Focus this text input" onClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
