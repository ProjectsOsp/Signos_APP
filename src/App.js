import React from "react";
import './style.css'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Main from './Componentes/Main'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="appContent">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App;