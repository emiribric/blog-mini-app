import React from 'react';

import './social-icons.styles.css';

const SocialIcons = () => {
    return(
        <div className='tm-mb-65'>
            <a rel='nofollow' href='https://fb.com/templatemo' className='tm-social-link buzz-out-on-hover'>
                <i className='fab fa-facebook tm-social-icon'></i>
            </a>
            <a href='https://twitter.com' className='tm-social-link buzz-out-on-hover'>
                <i className='fab fa-twitter tm-social-icon'></i>
            </a>
            <a href='https://instagram.com' className='tm-social-link buzz-out-on-hover'>
                <i className='fab fa-instagram tm-social-icon'></i>
            </a>
            <a href='https://linkedin.com' className='tm-social-link buzz-out-on-hover'>
                <i className='fab fa-linkedin tm-social-icon'></i>
            </a>
        </div>
    );
};

export default SocialIcons;