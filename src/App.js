import './App.css';

import { Link, Outlet } from 'react-router-dom';
import { PokemonProvider } from './Context/pokemon-context';



function App() { 

  return (
    
 <div className="App">

 <nav className="navbar bg-light">
   <div className="container-fluid">
     <a className="navbar-brand" >
       <img src="https://www.cardmarket.com/img/public/images/user/avatar/avatar_990995368.png" alt="Pokemon" width="50" height="50" className="d-inline-block align-text-top"></img>
       Pokeapi - 211368
     </a>
     <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/allpokemons" className='nav-link'> Allpokemons </Link>
        </li>
        <li className="nav-item">
        <Link to="/pokesearch"  className='nav-link'> Search</Link>
        </li>
        <li className="nav-item">
        <Link to="/211368"  className='nav-link'> 211368</Link>
        </li>
</ul>
  	<form className="d-flex" role="search">
    <input type="text" placeholder="Search" aria-label="Search" />
        
         <button className="btn btn-outline-primary" type="submit" on>Search</button>

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
