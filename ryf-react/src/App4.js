import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';


// prop-types 参数类型检测
class MyTitle extends Component{
    render(){
        return(
            <h1>{this.props.title}</h1>
        )
    }
}

MyTitle.propTypes= {  //限制类型
    title:PropTypes.number //PropTypes 是插件 对象 所以大写
}
class App extends Component {

  render() {
    const data = 123
    return (
      <div className="App">
       <MyTitle title={data}/> 
      </div>
    );
  }
}

export default App;
