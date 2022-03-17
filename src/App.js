import './App.css';
import { QueryClientProvider, QueryClient} from 'react-query';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Negocios} from './pages/Negocios';
import {Negocio} from './pages/Negocio';
import {Contacto} from './pages/Contacto';
import { useState } from 'react'


const queryClient = new QueryClient()

function App() {
  
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
      <nav className="bg-white py-8 mb-8 text-right">
        <Link className="text-2xl px-2" to="/"> Inicio </Link>
        <Link className="text-2xl px-2" to="/contacto"> Contacto </Link>
       
        
      </nav>
   
      
      <Routes>
        <Route path="/" element={<Negocios />} />
        <Route path="/:negocioId" element={<Negocio/>}/>
        <Route path="/contacto" element={<Contacto />} />
        
      </Routes>
        

 
      <footer className="mt-80 h-10 bg-blue-500 h-screen">Footer</footer>
    </Router>
   
      </QueryClientProvider>
  );
}

export default App;
