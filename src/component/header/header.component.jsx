import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../logo/logo.component';
import SocialIcons from '../social-icons/social-icons.component';
import HamburgerButton from '../hamburger-button/hamburger-button.component';

import './header.styles.css';

const Header = () => {
    const [ toggleHamburger, setToggleHamburger] = useState(false);
    const handleToggleHanburger = () => {
        setToggleHamburger(!toggleHamburger);
    }

    return(
        <header className={`tm-header ${ toggleHamburger ? 'show' : 'hidden'}`} id='tm-header'>
            <div className='tm-header-wrapper'>             
                <HamburgerButton handleToggleHanburger={ handleToggleHanburger } />
                <Logo />
                
                <nav className='tm-nav' id='tm-nav'>            
                    <NavLink to='/' className='tm-nav-link'>
                        <i className='fas fa-house-user'></i>Blog Home
                    </NavLink>
                    <NavLink to='/blog' className='tm-nav-link'>
                        <i className='far fa-edit'></i>Single Blog
                    </NavLink>
                    <NavLink to='/about-us' className='tm-nav-link'>
                        <i className='fas fa-info-circle'></i>About Us
                    </NavLink>
                    <NavLink to='/contact-us' className='tm-nav-link'>
                        <i className='far fa-envelope'></i>Contact Us
                    </NavLink>
                </nav>

                <SocialIcons />

                <p className="tm-mb-80 pr-5 text-white">
                    Welcome to the Blog World website. Left side is a sticky menu bar, while the right side 
                    is main content section. Both will be able to scroll up and down.
                </p>
            </div>
        </header>
    );
};

export default Header;