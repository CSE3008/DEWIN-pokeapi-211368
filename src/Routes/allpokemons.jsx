import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function Allpokemons(){
    const [pokemons, setPokemons] = useState([])
    const [currentpage, setcurrentpage] = useState(0);
    const {i18n, t} = useTranslation(); 
   
       
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

    return(
        
        <main style= {{padding: "1rem 0"}}>
          <div className='container-fluid'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="Pokemon" width="400" height="140"></img>
        <p></p>
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
        <button type="button" className="btn btn-primary" onClick={prevPage}>{t("prev")}</button>&nbsp;
        <button type="button" className="btn btn-primary" onClick={nextPage}>{t("next")}</button>
        <p></p>
        </div>
        <div className="col-4">

        </div>
        <p></p>
      </div>  
        </main>
    );

}