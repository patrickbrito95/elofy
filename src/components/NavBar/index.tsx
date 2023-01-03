import react from 'react';
import { Link } from 'react-router-dom';
import './style.css';

 const NavBar = () => {
    
    let navBarItens: { name: string, path: string }[] = [
        { "name": "Home", "path": "/" },
        { "name": "Login", "path": "/login" },
        { "name": "About", "path": "/about" }
    ];
    
    return(
        <div className='navbar'>
            <div>
                Logo
            </div>
            <div className='wrapperItens'>
           
                {navBarItens.map((item) => (
                <div className="navbar-itens">

            <Link to={item.path}>{item.name}</Link>
                </div>
         
        ))}
      
            </div>
        </div>
    )
}

export default NavBar;