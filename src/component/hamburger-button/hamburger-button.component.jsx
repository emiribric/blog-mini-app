import React from 'react';

import './hamburger-button.styles.css';

const HamburgerButton = ({ handleToggleHanburger }) => {
    return(
        <button className='navbar-toggler' type='button' aria-label='Toggle navigation' onClick={ handleToggleHanburger }>
            <i className='fas fa-bars'></i>
        </button>
    );
};

export default HamburgerButton;