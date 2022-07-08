import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import Allpokemons from './Routes/allpokemons';
import Pokesearch  from './Routes/pokesearch';
import { PokemonProvider } from './Context/pokemon-context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokemonProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>       
        <Route path="/allpokemons" element={<Allpokemons />} />
        <Route path="/pokesearch" element={<Pokesearch />} />
      </Route>
    </Routes>
    <App />
    </BrowserRouter>
    </PokemonProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
