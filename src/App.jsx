import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navBar/';
import ItemListContainerComponent from './contenedor/itemListContainer/itemListContainer';
import ItemDetailContainer from './contenedor/itemDetailContainer/itemDetailContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import Categoria from './components/categorias/categoria';
import CartContextProvider from './components/context/CartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/footer';



const App = () => {
 
 
 
  return (
    
  <CartContextProvider>
    
    <BrowserRouter>
      
      <NavbarComponent/>
      
      <Switch>
        
        <Route exact path="/">
          <ItemListContainerComponent/>  
	      </Route>

        <Route exact path="/categoria/:catID">
          <Categoria/>  
	      </Route>

        <Route exact path="/detalle/:id">
          <ItemDetailContainer/>
        </Route>

        <Route exact path="/carrito/">
          <Cart/>
        </Route>

      </Switch>

      <Footer/>   
    
    </BrowserRouter>

  </CartContextProvider> 

  );
}

export default App;
