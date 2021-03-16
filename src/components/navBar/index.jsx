import 'bootstrap/dist/css/bootstrap.min.css'; 
import CartWidget from '../cartWidget';
import {Link} from 'react-router-dom'; 

const NavbarComponent = () => {
  return (
      <>
      <nav className="navBarComponent">
        <div>
          <Link to={`/`}> <img src="/images/img-2.png" alt="logo" className="logo" /> </Link>
        </div>
        <div className="listCategoria">
          <ul>
            <li>
              <Link to={`/categoria/remeras`}> <p>Remera</p></Link>
            </li>
            <li>
              <Link to={`/categoria/pantalon`}><p> Pantalon </p></Link>
            </li>
            <li>
            <Link to={`/categoria/buzos`}><p> Buzo </p></Link>
            </li>
            <li>
            <Link to={`/categoria/medias`}><p> Medias </p></Link>
            </li>
            <li>
            <Link to={`/categoria/camperas`}><p> Campera </p></Link>
            </li>
            <li>
            <Link to={`/categoria/gorro`}><p> Gorro </p></Link>
            </li>
          </ul>
        </div>
        <div>
          <CartWidget/>
        </div>  
      </nav>
      <div className="contenedorTitle">
        <div className="title" >
          <h1>nambio</h1>
        </div>  
      </div>
      </>
    
  );
}

export default NavbarComponent;