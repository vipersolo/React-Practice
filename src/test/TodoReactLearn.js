import React, { useState } from "react";
import {
  Row,
  Container,
  InputGroup,
  FormControl,
  Button,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";

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
      };
      setList([...list, newItem]);
    }
  };

  const editItem = (id) => {
    const updatedtext = prompt("Enter text");
    const updatedlist = list.map((item, index) => //list[index].value = userInput not this map expects return not assignment
      item.id === id ? { ...item, value: updatedtext } : item,
    );
    setList(updatedlist);
  };

  const deleteItem = (id)=>{
    const updatedlistdel = list.filter((item)=>(item.id !== id))
    setList(updatedlistdel) 
  }



  return (
    <div>
      <Container>
        <Row>
          <InputGroup>
            {/* //(e)=>setUserInput(e.target.value) */}
            <FormControl
              value={userInput}
              onChange={(e) => updateInput(e.target.value)}
            />
            <Button onClick={addItem}>Add</Button>
          </InputGroup>
        </Row>
        <Row>
          <ListGroup>
            {list.map((item, index) => (
              <ListGroup.Item key={index}>
                {console.log(item)}
                {item.value}
                <span>
                  <Button onClick={() => editItem(item.id)}>Edit</Button>
                  <Button onClick={() => deleteItem(item.id)}>Delete</Button>
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
