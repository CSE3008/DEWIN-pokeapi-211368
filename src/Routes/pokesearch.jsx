import { useEffect, useState } from 'react';
export default function Pokesearch(){
    

    const [pokemons, setPokemons] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
   
    const apiurl = 'https://pokeapi.co/api/v2/pokemon/'
    
    
    const fetchpokeapi = async () =>{
    const response = await fetch(apiurl)
    const resJSON = await response.json()      
        
  }

  const handlename = event =>{
    
    }
    const handlesubmit = ()=>{
    
    }
  
  
  
//   useEffect(() =>{
//     fetchpokeapi()
//   },[])
  
    return(
        <main style= {{padding: "1rem 0"}}>
            <div>
        <form className="d-flex" role="search">
            
            <input type="text" placeholder="Pokemon Name" aria-label="Search" onChange={(event) => {
         setSearchTerm(event.target.value);
        }} />        
            <button className="btn btn-outline-primary" type="submit" onClick={searchpoke}>Search</button>

       </form>
       {/* <div className="container">          
          <div className="row row-cols-1 row-cols-md-3 g-4">
          {searchResults().map((pokemon)=> ( 
            <div className="col-4" >               
              <div className="card" key={pokemon.id} >                           
                <img src={pokemon.sprites.front_default} className="card-img-top img-thumbnail" ></img>
                  <div className="card-footer">
                  <h2 className="card-title fw-bolder text-muted">{pokemon.name}</h2> 
                  </div>                           
              </div>             
            </div>))}
            </div>
        </div> */}
       </div>
    </main>
    );

}