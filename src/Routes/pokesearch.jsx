import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { SearchContext } from "../App";

const Pokesearch= () => {
    const { i18n, t } = useTranslation();
    const context = React.useContext(SearchContext);
  
    return (
      <form className="d-flex" role="search" onSubmit={context.handleSubmit}>
             
        <input
          type="text"
          placeholder={t("Searchp")}
          aria-label="Search"
          onChange={context.setNewSearchString}
        /> 
       
        <button className="btn btn-outline-primary" type="submit">{t("Search")}
     
        </button>
        
      </form>
    );
  };
  
  export default Pokesearch