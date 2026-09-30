import React from 'react';
import logof from '../img/LogoF.svg'
import facebook from '../img/Facebook.svg'
import twitter from '../img/Twitter.svg'
import youtube from '../img/YouTube.svg'
import instagram from '../img/Instagram.svg'

const Footer = () => {
    return (
        <footer className='footer_cont'>
        <div>
            <img className='footer_logo' src={logof} alt="" />
        </div>
        <nav>
            <img className='footer_link' src={facebook} alt="" />
            <img className='footer_link' src={twitter} alt="" />
            <img className='footer_link' src={youtube} alt="" />
            <img className='footer_link' src={instagram} alt="" />
        </nav>
        </footer>   
    );
}

export default Footer;
