import React, { Component } from 'react'

class Test extends Component {
    state = {
        value : 5
    }
  changeValue= () =>{
    this.setState({
        value :10
    })
    
  }

//   shouldComponentUpdate(nextProps,nextState){
//     if (nextState.value === this.state.value){
//         return false
//     }
//     return true
//   }
    shouldComponentUpdate(nextProps,nextState){
        return nextState.value !== this.state.value
    }
  
  render() {
    console.log("rendered")
    return (
      <div>
        <h1>{this.state.value}</h1>
      <button onClick={this.changeValue}>Change value</button>  
      </div>
    )
  }
}

export default Test