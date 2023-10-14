import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { imagess } from '../../constants';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Menu = () => (
  <>
    <p>
      <Link to="/research" className='menu-link'>Research</Link>
    </p>
    <p>
      <Link to="/api" className='menu-link'>API</Link>
    </p>
    <p>
      <Link to="/safety" className='menu-link'>Safety</Link>
    </p>
    <p>
      <Link to="/company" className='menu-link'>Company</Link>
    </p>
  </>
)
const Navbar = () => {
  const location = useLocation();

  const [toggleMenu, settoggleMenu] = useState(false);
  const [scrollNavbar, setscrollNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrollNavbar) {
        setscrollNavbar(true);
      } else if (window.scrollY === 0 && scrollNavbar) {
        setscrollNavbar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollNavbar]);
  // const backgroundColor = location.pathname === '/' ? 'rgba(20, 24, 58, 0.8)' : 'rgb(20, 24, 58)';
  // const backgroundColor = location.pathname === '/' ? 'transparent' : 'rgb(20, 24, 58)';

  const navbarStyle = {
    backgroundColor: scrollNavbar ? '#466475' : 'transparent',
    // color: scrollNavbar ? 'black' : 'white',
    transition: 'background-color 0.3s'

  };
  // const combinedStyle = {
  //   ...navbarStyle,
  //   backgroundColor: location.pathname === '/' ? (navbarStyle.backgroundColor) : 'rgb(20, 24, 58)'
  // };
  const combinedStyle = {
    ...navbarStyle,
    backgroundColor: location.pathname === '/' ? (navbarStyle.backgroundColor) : '#466475'
  };

  return (
    <div className='navbar_' style={combinedStyle}>
      <div className='navbar-links'>
        <div className='navbar-link_logo'>
          <Link to="/" >
            <img src={imagess.openai_white_lockup} alt="" className='' />
          </Link>
        </div>
        <div className='navbar-link-container'>
          <Menu />
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Log in</p>
        <button className='btn-transition'>Sign up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => settoggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => settoggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-menu-container scale-up-center'>
            <div className='navbar-menu-container-links'>
              <Menu />
            </div>
            <div className='navbar-menu-container-link-sign '>
              <p style={navbarStyle}>Log in</p>
              <button className='btn-transition'>Sign up</button>
            </div>
          </div>
        )

        }
      </div>


    </div>
  )
}

export default Navbar;