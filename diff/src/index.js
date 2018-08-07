import React from './react';
import ReactDOM from './react-dom';
//将jsx 变成createElement
//eact.Component基类
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num:1
        }
    }
    render(){
        // {this.state.num} jsx预编译为number 不是string 
        return(
            <div>
                <h1>count:{this.state.num}</h1>  
                <button onClick={() =>this.onClick()}>add</button>
            </div>
        )
    }
    onClick(){
        console.log('onclick');
        this.setState({
            num:this.state.num + 1
        })
    }
}
ReactDOM.render(
    <div>
        Hello
        <span className='rt' onClick="console.log('zz');"style={{fontSize:20,fontWeight:'bold'}}>World!</span>
        <Counter/>
    </div>,
    document.getElementById('root')
)
