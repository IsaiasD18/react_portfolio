import { NavLink } from 'react-router-dom';

function Header() {
    
    return (
      <header className="row justify-between align-center">
        <h3>Isaias</h3>
        <nav>
          <NavLink to="/">About me</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
    )
  }
  
  export default Header;