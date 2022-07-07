import './App.css';

import { Link, Outlet } from 'react-router-dom';
import { PokemonProvider } from './Context/pokemon-context';


export default ()=> <PokemonProvider>
  <App></App>
</PokemonProvider>
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
</ul>
  	<form className="d-flex" role="search">
    <input type="text" placeholder="Search" aria-label="Search" />
        
         <button className="btn btn-outline-primary" type="submit">Search</button>

       </form>
   </div>
 </nav> 
  <Outlet />

       <img src='https://phantom-marca.unidadeditorial.es/9265f61b4b94fe9d71cff8ad932d3a7d/resize/660/f/webp/assets/multimedia/imagenes/2021/02/28/16145196328904.jpg'></img>
          
    </div>
  );
}

// export default App;
