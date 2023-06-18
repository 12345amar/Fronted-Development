import './App.css';
import HelloWorld from './components/HelloWorld'

function App() {
  const name = 'Amar'
  const age = 30
  const myDetails = {
    city: 'Ghaziabad',
    state: 'U.P.'
  }


  return (
   <HelloWorld name={name} age={age} myDetails={myDetails}/>
  );
}

export default App;
