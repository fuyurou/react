import React, { Component } from 'react';
import './App.css';


class App extends Component {
   state={
       value:'Hello!'
   }
   handleChange(event){
       //拿到input 里面的值给setState
    this.setState({
        value:event.target.value
    })
   }
  render() {
    const value =this.state.value
    return (

      <div className="App">
        <input type="text" value={value} onChange={this.handleChange.bind(this)}/>
        <p>{value}</p>
      </div>
    );
  }
}

export default App;
