import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "antony",
        email: "antony@example.com",
        city: "Aluva",
      },
    };
  }

  updateCity = () => {
    this.setState((prevData) => ({
      user: {
        ...prevData.user, //...prevData.user (.user ) is important or useobject will be stored inside user object + city . so wrong output
        city: "USA",
      },
    }));
  };
  render() {
    const { name, email, city } = this.state.user;
    return (
      <div>
        <p>
          <strong>Name:</strong>
          {name}
        </p>
        <p>
          <strong>email:</strong>
          {email}
        </p>
        <p>
          <strong>city:</strong>
          {city}
        </p>
        <button onClick={this.updateCity}>Update City</button>
      </div>
    );
  }
}

export default Info;
