import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() { 
  const [pokemon, setPokemon] = useState([])
  const [currentpage, setcurrentpage] = useState(0);
 
  const apiurl = 'https://pokeapi.co/api/v2/pokemon?limit=10'
  const fetchapi = async () =>{
  const response = await fetch(apiurl)
  const resJSON = await response.json() 

  
  
    for(let i=0; resJSON.results.length; i++){  
      console.log(resJSON.results[i].url)     
      const respoke = await fetch(resJSON.results[i].url)
      const pokeJSON = await respoke.json()
      setPokemon(prevArray => [...prevArray,pokeJSON])
      
      }
}



useEffect(() =>{
  fetchapi()
},[])

const pagepokemon = ()=>{
  return pokemon.slice(currentpage,currentpage + 10); 
}
const nextPage = ()=>{
  setcurrentpage(currentpage + 10);
}
const prevPage = ()=>{
  setcurrentpage(currentpage - 10);
}


  return (
    <div className="App">
      <h1> POKEAPI - 211368 </h1>
      <div className='container-fluid'>
        <div className="container">          
          <div className="row row-cols-1 row-cols-md-3 g-4">
          {pagepokemon().map((poke, index)=> ( 
            <div className="col-4">               
              <div className="card" id={index} >                
                <img src={poke.sprites.front_default} ></img>
                <h5 className="card-title">{poke.name}</h5>            
              </div>             
            </div>))}
            </div>
        </div>
      </div>  
      <p></p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col-4">

        </div>
        <div className="col-4">
        <button type="button" className="btn btn-primary" onClick={prevPage}>Previous</button>&nbsp;
        <button type="button" className="btn btn-primary" onClick={nextPage}>Next</button>
        </div>
        <div className="col-4">

        </div>
      </div>
      
    </div>
  );
}

export default App;
