import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navBar/';
import ItemListContainerComponent from './contenedor/itemListContainer/itemListContainer';
import ItemDetailContainer from './contenedor/itemDetailContainer/itemDetailContainer';



const App = () => {
 
 
 
  return (
    
    <>
      <NavbarComponent/>
      <ItemListContainerComponent curso="react " cantidad=" mucho"/>
      <ItemDetailContainer/>
    </>
  );
}

export default App;
