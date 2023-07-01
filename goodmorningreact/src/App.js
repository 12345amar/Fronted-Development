import { useState } from 'react';
import './assests/style.css'
import ToDoList from './components/ToDoList';


function App() {
  const name = 'Amar'
  const age = 30
  const myDetails = {
    city: 'Ghaziabad',
    state: 'U.P.'
  }
 

  return (
    <>
      {/* <HelloWorld name={name} age={age} myDetails={myDetails} /> */}
      <ToDoList />
      {/* <HelloClass /> */}
      
 
      
    </>
  );
}

export default App;
