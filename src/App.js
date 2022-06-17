import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App() {
const url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
const fetchapi = async () =>{
  const response = await fetch(url)
  console.log(response.statusText)
}
useEffect(()=>{
  fetchapi()
},[])
  return (
    <div className="App">
      <h1> POKEAPI - 211368 </h1>
      
    </div>
  );
}

export default App;
