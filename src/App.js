// import logo from './logo.svg';
// import './App.css';
import {Component} from 'react';

// import UseEffectMultiple from './useeffect/UseEffectMultiple'


import TestCode from "./test/TestCode"
// import UseEffectUnmount from './useeffect/UseEffectUnmount';



// import Useeffect from './useeffect/Useeffect';
// import Item from './array_state/Item';
// import Users from './array_state/Users';
// import Child from './context/Child'
// import UserContext from './context/UserContext';
// import Info from './state_object_class/Info';
// import Profile from './state_object/Profile';
// import Site from './navigationpage/Site';
// import UseEffectMultiple from './useeffect/UseEffectMultiple';
// import FormData from './functional_components/FormData'
// import Form from './functional_components/Form'
// import Counter from './component/Counter';
// import List from './component/List'
// import Test from './component/Test';
// import Car from './component/Car';
// import Score from './component/Score'---
// import Name from './functional_components/Name';
// import Todo from './component/Todo';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React 
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  
  // user = {
  //   name:"antony",
  //   age:20
  // }

  render(){
    return(
    <div className='App'>
      {/* <Counter />,
      <Form />
      <List /> */}
      {/* <Test />
      <Car /> 
      <Score isScore = {60}/>
      <Name /> */}
      {/* <Form /> */}
      {/* <FormData /> */}
      {/* <Site /> */}
      {/* <Profile /> */}
      {/* <Info /> */}
      {/* <UserContext.Provider value={this.user}>
        <Child />
      </UserContext.Provider> */}
      {/* <Item /> */}
      {/* <Users /> */}
      {/* <Useeffect /> */}
      {/* <UseEffectUnmount /> */}
      {/* <UseEffectMultiple /> */}
      <TestCode />
    </div>
    // use <></> or div becuase return only one root element .
    )
  }
}

export default App;
