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
            <Link to={`/categoria/remeras`}> Remera</Link>
          </li>
          <li>
            <Link to={`/categoria/pantalon`}> Pantalon </Link>
          </li>
          <li>
          <Link to={`/categoria/buzos`}> Buzo </Link>
          </li>
          <li>
          <Link to={`/categoria/medias`}> Medias </Link>
          </li>
          <li>
          <Link to={`/categoria/camperas`}> Campera </Link>
          </li>
          <li>
          <Link to={`/categoria/gorro`}> Gorro </Link>
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