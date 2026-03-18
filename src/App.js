// import logo from './logo.svg';
import './App.css';
import {react,Component} from 'react';
import Counter from './component/Counter';
import Form from './component/Form'
import List from './component/List'
import Test from './component/Test';
import Car from './component/Car';
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
  state = {
    name:"hi"
  }
  changeText =() => {
    this.setState({name:"hi antony"})
  }

  render(){
    return(
    <div className='App'>
      {/* <Counter />,
      <Form />
      <List /> */}
      <Test />
      <Car /> 
    </div>
    // use <></> or div becuase return only one root element .
    )
  }
}

export default App;
