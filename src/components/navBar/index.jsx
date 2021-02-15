import 'bootstrap/dist/css/bootstrap.min.css'; 
import CartWidget from '../cartWidget';
import {Link} from 'react-router-dom'; 

const NavbarComponent = () => {
  return (
      <>
      <nav style={{backgroundColor:"green"}}>
        <Link to={`/`}> <img src="/images/logo512.png" alt="" style={{width:80, height:80}}/> </Link>
        <ul style={{listStyle:"none", marginLeft:1000}}>
          <li>
            <a href="#" style={{color:"white"}}>¿Quienes somos?</a>
          </li>
          <li>
            <a href="#" style={{color:"white"}}>Nuestros productos</a>
          </li>
          <li>
            <a href="#" style={{color:"white"}}>Contacto</a>
          </li>
        </ul>
        <div style={{float:"right"}}>
        <CartWidget/>
        </div>  
      </nav>
      </>
    
  );
}

export default NavbarComponent;
