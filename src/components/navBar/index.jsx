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
            <Link to={`/categoria/A`}> Remera</Link>
          </li>
          <li>
            <Link to={`/categoria/B`}> Pantalon </Link>
          </li>
          <li>
          <Link to={`/categoria/C`}> Buzo </Link>
          </li>
          <li>
          <Link to={`/categoria/D`}> Medias </Link>
          </li>
          <li>
          <Link to={`/categoria/E`}> Campera </Link>
          </li>
          <li>
          <Link to={`/categoria/F`}> Gorro </Link>
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