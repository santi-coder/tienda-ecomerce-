import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navBar/';
import ItemListContainerComponent from './contenedor/itemListContainer/itemListContainer';
import  {BrowserRouter, Switch, Route} from 'react-router-dom'
import itemDetailContainer from './contenedor/itemDetailContainer/itemDetailContainer';








const App = () => {
  return (
    <>
    <NavbarComponent/>
    <ItemListContainerComponent curso="react " cantidad=" mucho"/>
    <itemDetailContainer/>
    </>
  );
}

export default App;
