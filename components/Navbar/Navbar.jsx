import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img className='app__navbar-logo-img' src={images.logo} alt="bliss logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#gallery'>Gallery</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Login</a>
        <button type='button'><a href='/' className='p__opensans'>Signup</a></button>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#A44100' fontSize={27} onClick={() => setToggleMenu(true)}/>
        
        {toggleMenu &&(
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home'>Home</a></li>
              <li className='p__opensans'><a href='#about'>About</a></li>
              <li className='p__opensans'><a href='#menu'>Menu</a></li>
              <li className='p__opensans'><a href='#gallery'>Gallery</a></li>
              <li className='p__opensans'><a href='#contact'>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
      {/* <div className='navbar_bottom_padding'></div> */}
    </nav>
  )
}

export default Navbar