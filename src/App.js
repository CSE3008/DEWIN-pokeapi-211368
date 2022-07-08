import './App.css';

import { Link, Outlet } from 'react-router-dom';
import { PokemonProvider } from './Context/pokemon-context';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';




function App() { 
  const {i18n, t} = useTranslation();

  function changeLaguage(language) {
    i18n.changeLanguage(language);
  }
  

  return (
    
 <div className="App">

 <nav className="navbar bg-light">
   <div className="container-fluid">
     <a className="navbar-brand" >
       <img src="https://www.cardmarket.com/img/public/images/user/avatar/avatar_990995368.png" alt="Pokemon" width="50" height="50" className="d-inline-block align-text-top"></img>
       <p>Poke API</p>
     </a>
     <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/allpokemons" className='nav-link'> {t("getp")} </Link>
        </li>
        <li className="nav-item">
        <Link to="/211368"  className='nav-link'> About 211368</Link>
        </li></ul>
        <p
          className={`App-link ${
            i18n.language === "es" ? "selected" : "unselected"
          }`}
          onClick={() => changeLaguage("es")}
        >
          🇲🇽
        </p>
        <p
          className={`App-link ${
            i18n.language === "en" ? "selected" : "unselected"
          }`}
          onClick={() => changeLaguage("en")}
        >
          🇺🇸
        </p>


  	<form className="d-flex" role="search">
    <input type="text" placeholder={t("Searchp")} aria-label="Search" />
        
         <button className="btn btn-outline-primary" type="submit" >{t("Search")}</button>
         {/* onClick={() => } */}

       </form>
   </div>
 </nav> 
  <Outlet />
<footer className="bg-light">

<p>&copy; Copyright 2022. All rights reserved.</p>
    
<span>Made with <span class="heart">♥</span> remotely from Anywhere</span>

</footer>
    
     </div>
  );
}

export default App;
