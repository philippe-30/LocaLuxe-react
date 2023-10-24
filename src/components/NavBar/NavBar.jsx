import React from 'react'
import './navBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div className='logo'>
        <img src='../../../images/logo.png' alt='' />
        <h1>LocaLuxe </h1>
      </div>
      <nav>
        <Link className='aHref' to='/'>Accueil</Link>
        <Link className='aHref' to='/about'>A propos</Link>
        <Link className='aHref' to='/contact'>Contact</Link>
        <Link className='aHref' to='/connexion'>Se connecter</Link>
      </nav>
    </header>
  )
}

export default NavBar