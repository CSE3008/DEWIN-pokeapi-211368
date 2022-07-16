import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from 'react-router-dom';
import { SearchContext } from "../App";
import '../App'

import Pokecard from "./routeHija/pokecard";


export default function Allpokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [currentpage, setcurrentpage] = useState(0);
  const { i18n, t } = useTranslation();
  const context = React.useContext(SearchContext); 
  const [pokeinfo,setPokeinfo] = useState();

  const apiurl = "https://pokeapi.co/api/v2/pokemon?limit=54";//1154

  const fetchpokeapi = async () => {
    const response = await fetch(apiurl);
    const resJSON = await response.json();

    for (const element of resJSON.results) {
      const urlpokemon = element.url;
      const respokemon = await fetch(urlpokemon);
      const pokemonJSON = await respokemon.json();
      setPokemons((prevArray) => [...prevArray, pokemonJSON]);
      console.log(pokemonJSON);
    }
  };

  useEffect(() => {
    fetchpokeapi();
  }, []);

  

  const pagepokemons = () => {
    return filteredPokemons.slice(currentpage, currentpage + 10);
  };
  const nextPage = () => {
    setcurrentpage(currentpage + 10);
  };
  const prevPage = () => {
    setcurrentpage(currentpage - 10);
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    if (context.filterString !== "") {
      return pokemon.name.includes(context.filterString);
    } else {
      return pokemon;
    }
  });
  const infopokemon = (poke) =>
  {setPokeinfo(poke);
  console.log(poke);}

  return (
    <main style={{ padding: "1rem 0" }}>
      <div className="container-fluid">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png"
          alt="Pokemon"
          width="400"
          height="140"></img>
        <p></p>
        
      
        <div className="container">
          
          <Pokecard data={pokeinfo}/>
          
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {pagepokemons().map((pokemon) => (
              <div className="col-4">
                {/* <Link to="/pokecard" className='nav-link' onClick={()=>infopokemon(pokemon)} data={pokeinfo}>    */}
                <div className="card" key={pokemon.id}  onClick={()=>infopokemon(pokemon)}>
                  <h3>#0{pokemon.id}</h3>
                  <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    className="card-img-top img-thumbnail"></img>
                  <div className="card-footer">
                    <h2 className="card-title fw-bolder text-muted">
                      {pokemon.name}
                    </h2>
                  </div>
                </div>
                {/* <Link> */}
              </div>
            ))}
            
           
          </div>
          
         
          
        </div>
      </div>
      <p></p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col-4"></div>
        <div className="col-4">
          <p></p>
          <button type="button" className="btn btn-primary" onClick={prevPage}>
            {t("prev")}
          </button>
          &nbsp;
          <button type="button" className="btn btn-primary" onClick={nextPage}>
            {t("next")}
          </button>
          <p></p>
        </div>
        <div className="col-4"></div>
        <p></p>
      </div>
    </main>
  );
}
