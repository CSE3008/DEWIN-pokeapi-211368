import './App.css';
import { useEffect, useState } from 'react';



function App() { 
  const [pokemons, setPokemons] = useState([])
  const [currentpage, setcurrentpage] = useState(0);
 
  const apiurl = 'https://pokeapi.co/api/v2/pokemon?limit=30'
  
  
  const fetchpokeapi = async () =>{
  const response = await fetch(apiurl)
  const resJSON = await response.json()

      for(let i=0; i<resJSON.results.length; i++){ 
        const urlpokemon = resJSON.results[i].url
        const respokemon = await fetch(urlpokemon)
        const pokemonJSON = await respokemon.json()
        setPokemons(prevArray=>[...prevArray, pokemonJSON]);  
        console.log(pokemonJSON)     
     }
}



useEffect(() =>{
  fetchpokeapi()
},[])

const pagepokemons = ()=>{
  return pokemons.slice(currentpage,currentpage + 10); 
}
const nextPage = ()=>{
  setcurrentpage(currentpage + 10);
}
const prevPage = ()=>{
  setcurrentpage(currentpage - 10);
}


  return (
    <div className="App">
      <img src='https://phantom-marca.unidadeditorial.es/9265f61b4b94fe9d71cff8ad932d3a7d/resize/660/f/webp/assets/multimedia/imagenes/2021/02/28/16145196328904.jpg'></img>
      <h1> POKEAPI - 211368 </h1>
      <h1> Bookkepper! </h1>
      <div className='container-fluid'>
        <div className="container">          
          <div className="row row-cols-1 row-cols-md-3 g-4">
          {pagepokemons().map((pokemon)=> ( 
            <div className="col-4" >               
              <div className="card" key={pokemon.id} >                           
                <img src={pokemon.sprites.front_default} className="card-img-top img-thumbnail" ></img>
                  <div className="card-footer">
                  <h2 className="card-title fw-bolder text-muted">{pokemon.name}</h2> 
                  </div>                           
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
          <p></p>
        <button type="button" className="btn btn-primary" onClick={prevPage}>Previous</button>&nbsp;
        <button type="button" className="btn btn-primary" onClick={nextPage}>Next</button>
        <p></p>
        </div>
        <div className="col-4">

        </div>
        <p></p>
      </div>
      
    </div>
  );
}

export default App;
