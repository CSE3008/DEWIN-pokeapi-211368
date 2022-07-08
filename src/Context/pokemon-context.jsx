import React, { useEffect, useMemo, useState } from 'react';

const PokemonContext = React.createContext();

export function PokemonProvider(props){
   
    
   
    
const value = useMemo(()=> {
    return({
              
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