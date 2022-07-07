import React, { useEffect, useMemo, useState } from 'react';

const PokemonContext = React.createContext();
export function PokemonProvider(props){
    const [pokemons, setPokemons] = useState([])
    
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
   
    
const value = useMemo(()=> {
    return({
        pokemons,       
    })
},[])

return <PokemonContext.Provider value={value} {...props} />
}
export function usePokemons (){
    const context = React.useContext(PokemonContext)
    if (!context){
        throw new Error('No existe el Pokemon')
    }
    return context;
}