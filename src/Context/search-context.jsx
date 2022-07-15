import React, { useState, useEffect, useMemo } from "react";
const SearchContext2 = React.createContext();

export function SearchProvider (props){

    const [searchString, setSearchString] = useState("");
    const [filterString, setFilterString] = useState("");

    const setNewSearchString = (e) => {
        const searchStringInput = e.target.value;
        setSearchString(searchStringInput);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFilterString(searchString);
        
      }
    
    
     
      const  value = useMemo (() => {
        return ({
            searchString,
            filterString,
            handleSubmit,
            setNewSearchString
        })
      }, [handleSubmit, setNewSearchString, filterString])
      return <SearchContext2.Provider value={value} {...props}/>
}
export function useSearch(){
    const context = React.useContext(SearchContext2)
    if (!context){
        throw new Error('No existe el Pokemon')
    }
    return context;
}