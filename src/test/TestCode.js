import React, { useState } from "react";
import { ListGroup } from 'react-bootstrap';
import {
  Container,
  Row,
  Button,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function TestCode() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  // Helper function to update state
  const updateInput = (value) => {
    setUserInput(value);
  };

  const addItem = () => {
    if (userInput.trim() !== "") {
      const newItem = {
        id: Math.random(),
        value: userInput,
      };
      setList([...list, newItem]);
      setUserInput("");
    }
  };

  const editItem = (index)=>{
    const editTodo = prompt('edit the todo')
    if (editTodo !== null && editTodo.trim() !== ""){
        const updatedTodos = [...list] // [{}, {}, {}] index decides which to access , and .value edited
        updatedTodos[index].value = editTodo
        setList(updatedTodos)
    }
  }

//   const deleteItem = (key)=>{      // for index passed...... not id
//     const updatedList = list.filter((item,index)=>(index!==key))
//     setList(updatedList)
//   }

    const deleteItem = (key)=>{
    const updatedList = list.filter((item)=>( item.id !== key))
    setList(updatedList)
  }
  return (
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
        Todo List
      </Row>

      <hr />

      <Row>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Add Item . . ."
            size="lg"
            value={userInput}
            onChange={(e) => updateInput(e.target.value)}
          />
          <InputGroup>
            <Button variant="success" className="mt-2" onClick={addItem}>
              ADD
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
              style={{ display: "flex", justifyContent: "space-between" }} // todo on left , buttons on right (justifyContent: "space-between" and flex)
            > 

              {item.value}
              <span>
                <button className="btn btn-danger" style={{marginRight:"10px"}} onClick={()=>deleteItem(item.id)}>Delete</button>
                <button className="btn btn-warning" onClick={()=>editItem(index)}>edit</button>
              </span>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
}

export default TestCode;
