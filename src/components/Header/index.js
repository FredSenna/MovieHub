import './header.css';
import { Link } from 'react-router-dom'

function Header(){
  return(
    <header elementClass="header">
      <Link className="logo" to="/">
        <img src='./Logo moviehub site.png'/>
      </Link>
      <Link className="favoritos" to="/favoritos">Meus filmes</Link>
    </header>
  )
}

export default Header; 

a

