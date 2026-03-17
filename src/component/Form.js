import React, { Component } from "react";

class Form extends Component {
  state = {
    text: "",
  };

  onTextChange = (event) => {
    // console.log(event);
    console.log(event.target.value);
    // console.log(event.nativeEvent.data)

    this.setState({
      text: event.target.value,
    });
  };

  onSubmits = ()=> {
    console.log(this.state.text)
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.onTextChange} value={this.state.text} />
        <button type="button" onClick={this.onSubmits}>Submit</button>
        <h3>{this.state.text}</h3>
      </form>
    );
  }
}

export default Form;
