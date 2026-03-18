import React, { Component } from "react";
class List extends Component {
  state = {
    users: [
      { id: 1, name: "antony" },
      { id: 2, name: "kuttan" },
      { id: 3, name: "akshay" },
    ],
  };
  render() {
    return (
      <div>
        {this.state.users.map((u)=>(  //can use ()=>{} :->explicit manually return . or()=>() :-> auto return implicit
            <h1 key={u.id}>{u.name}</h1> //cannot use {...u} {} needs value not object expansion.
        ))}
      </div>
    );
  }
}
// div concept , main root div 1 only allowed , in map() each iteration also 1 allowed . childern for both allowed
export default List;
