import React from 'react';

import './logo.styles.css';

const Logo = () => {
    return(
        <div className='tm-site-header'>
            <div className='mb-3 mx-auto tm-site-logo'>
                <i className='fas fa-blog fa-2x'></i>
            </div>            
            <h1 className='text-center'>Blog World</h1>
        </div>
    );
};

export default Logo;