import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navBar/';
import ItemListContainerComponent from './contenedor/itemListContainer/itemListContainer';
import ItemDetailContainer from './contenedor/itemDetailContainer/itemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 


const App = () => {
 
 
 
  return (
    
    
    <BrowserRouter>
      
      <NavbarComponent/>
      
      <Switch>
        
        <Route exact path="/">
          <ItemListContainerComponent curso="react " cantidad=" mucho"/>  
	      </Route>

        <Route exact path="/detalle/:id">
          <ItemDetailContainer/>
        </Route>
    
      </Switch>

      <footer> <h1> hola soy el footer </h1> </footer>    
    
    </BrowserRouter>
  );
}

export default App;
