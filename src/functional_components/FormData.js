import { useState } from "react";

function FormData() {
  const [FormData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      // setstate either needs object or a function that returns a value. is why () for- {} or mannualy write return for{return{...}}
      ...prevData,
      [name]: value, // if name is givent without [] . taken as string not the value
    }));
  };

  const onsend = (event) => {
    event.preventDefault();
    alert(`name:${FormData.name}, age:${FormData.age}, email:${FormData.email}`);
  };
  return (
    <div>
      <form onSubmit={onsend}>
        <label>
          Name: <input type="text" name="name" onChange={handleChange}></input>
        </label>
        <br />
        <label>
          Age: <input type="text" name="age" onChange={handleChange}></input>
        </label>
        <br />
        <label>
          email:{" "}
          <input type="email" name="email" onChange={handleChange}></input>
        </label>
        <br />
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default FormData;
