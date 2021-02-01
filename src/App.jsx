import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navBar/';
import ItemListContainerComponent from './contenedor/itemListContainer/itemListContainer';



const App = () => {
  return (
    <>
    <NavbarComponent/>
    <ItemListContainerComponent curso="react " cantidad=" mucho"/>
     
    </>
  );
}

export default App;
