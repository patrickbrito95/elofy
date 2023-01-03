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
            <div className='logo'>
                <img width={120} src="https://elofy.com.br/wp-content/uploads/2022/01/logo-elofy-azul-transparente.png" />
            </div>
            <div className='wrapperItens'>
           
                {navBarItens.map((item) => (
                <div className="navbar-itens">

            <Link className='links' to={item.path}>{item.name}</Link>
                </div>
         
        ))}
      
            </div>
        </div>
    )
}

export default NavBar;