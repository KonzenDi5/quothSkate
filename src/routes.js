import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Header from './components/Header.js'
import Menubar from './components/Menubar.js'
import Footer from './components/Footer.js'
import Carrinho from './pages/Carrinho/index.js'

import { CartProvider } from '../src/components/CartContext.js';



import Erro from './pages/Erro'

function RoutesApp() {
  return (
    <BrowserRouter>
     <CartProvider>
      <Header />
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path='*' element={ <Erro/> } />
      </Routes>
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}
export default RoutesApp;