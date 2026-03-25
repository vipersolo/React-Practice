import React, { useState } from "react";
import {
  Row,
  Container,
  InputGroup,
  FormControl,
  Button,
  ListGroup,
} from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";

function TodoReactLearn() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput.trim() !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput,
        status: "Not Done",
      };
      setList([...list, newItem]);
      setUserInput("");
    }
  };

  const editItem = (id) => {
    const edittext = prompt("Enter text");
    if (edittext.trim() !== "" && edittext !== null) {
      const updatedlist = list.map(
        (
          item,
          index, //list[index].value = userInput not this map expects return not assignment
        ) => (item.id === id ? { ...item, value: edittext } : item),
      );
      setList(updatedlist);
    }
  };

  const statusChange = (id) => {
    const updatedstatuslist = list.map((item, index) =>
      item.id === id ? { ...item, status: "done" } : item,
    );
    setList(updatedstatuslist);
  };

  const notdonestatus = (id)=>{
    const updatedstatuslist2 = list.map((item,index)=>(item.id === id?{...item,status:"Not Done"}:item))
    setList(updatedstatuslist2)
  }


  const deleteItem = (id) => {
    const updatedlistdel = list.filter((item) => item.id !== id);
    setList(updatedlistdel);
  };

  //style={{}} - outer {}-jsx inner {}- js object

  return (
    <div>
      <Container>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            fontSize: "48px",
            fontWeight: "bolder",
          }}
        >
          ToDo List
        </Row>
        <hr />

        <Row>
          <InputGroup className="mb-2">
            {/* //(e)=>setUserInput(e.target.value) */}
            <FormControl
              placeholder="Add Item . . ."
              size="lg"
              style={{ border: "1px solid black" }}
              value={userInput}
              onChange={(e) => updateInput(e.target.value)}
            />
            <InputGroup className="mt-2">
              <Button onClick={addItem} variant="success">
                Add
              </Button>
            </InputGroup>
          </InputGroup>
        </Row>

        <Row>
          <ListGroup>
            {list.map((item, index) => (
              <ListGroup.Item
                key={index}
                variant="dark"
                action
                style={{
                  display: "flex",
                  justifyContent: "space-between", // very import space between name and buttons
                }}
              >
                {console.log(item)}
                {item.value}
                <Button onClick={()=>notdonestatus(item.id)}>{item.status}</Button>
                <span>
                  <Button
                    className="btn btn-warning"
                    onClick={() => editItem(item.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    className="btn btn-danger"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </Button>
                  <Button onClick={() => statusChange(item.id)}>Done</Button>
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </Container>
    </div>
  );
}

export default TodoReactLearn;
