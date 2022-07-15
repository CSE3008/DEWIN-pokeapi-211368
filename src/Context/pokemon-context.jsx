import React, { useState } from "react";
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { SearchContext } from "../App";


const SearchPokemonContext = () => {
    const { i18n, t } = useTranslation();
    const context = React.useContext(SearchContext);
  
    return (
      <form className="d-flex" role="search" onSubmit={context.handleSubmit}>
           <Link to="/pokesearch">  
        <input
          type="text"
          placeholder={t("Searchp")}
          aria-label="Search"
          onChange={context.setNewSearchString}
        /> </Link>
       
        <button className="btn btn-outline-primary" type="submit">{t("Search")}
     
        </button>
        
      </form>
    );
  };
  
  export default SearchPokemonContext