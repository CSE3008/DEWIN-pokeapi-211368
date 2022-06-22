import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() { 
  const [pokemon, setPokemon] = useState([])
 
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=10'
  const fetchapi = async () =>{
  const response = await fetch(url)
    const resJSON = await response.json()
    
    for(let i=0; resJSON.results.length; i++){      
      
      const respoke = await fetch(resJSON.results[i].url)
      const pokeJSON = await respoke.json()
      setPokemon(prevArray => [...prevArray,pokeJSON])
      console.log(pokeJSON)
      }
      console.log(pokemon)
  
 
}


useEffect(() =>{
  fetchapi()
},[])


  return (
    <div className="App">
      <h1> POKEAPI - 211368 </h1>
      <div className='container-fluid'>
        <div className="container">          
          <div className="row">
          {pokemon.map((poke, index)=> ( 
            <div className="col-4">               
              <div className="card" key={index} >                
                <img src={poke.sprites.front_default} ></img>
                <h5 className="card-title">{poke.name}</h5>            
              </div>             
            </div>))}
            </div>
        </div>
      </div>  
      <p></p>
      <nav aria-label="...">
      <ul className="pagination">
        <li className="page-item disabled">
          <a className="page-link">Previous</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">1</a></li>
        <li className="page-item active" aria-current="page">
          <a className="page-link" href="#">2</a>
        </li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
      </nav>    
    </div>
  );
}

export default App;
