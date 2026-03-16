import React, { Component } from 'react'

class Form extends Component {
    state = {
        text : ""
    }
    onTextChange = (event) =>{
        this.setState(
            {
                text: event.target.value
            }
        )
    }
  render() {
    return (
      <form>
        <input type='text' onChange={this.onTextChange} />
        <h3>{this.state.text}</h3>
      </form>
    )
  }
}

export default Form