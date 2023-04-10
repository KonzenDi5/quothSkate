import React from 'react';
import Header from './components/Header';
import Menubar from './components/Menubar';
import Card from './components/Card'
import Content from './components/ProductGrid';
import Footer from './components/Footer';
import './components/estilos/estiloApp.css'


function App() {
  return (
    <div className="App">
      <Header />
      <Menubar />
      <Card />
      <Content />
      <Footer />
    </div>
  );
}

export default App;