import React from 'react';
import logo from '../img/Logo.svg'
import search from '../img/Search.svg'

const Header = () => {
    return (
         <header className="container header_cont">
    <div>
        <img src={logo} alt="" />
    </div>
    <nav>
        <li>Продукция</li>
        <li>Материалы</li>
        <li>О нас</li>
        <li>Контакты</li>
        <img src={search} alt="" />
    </nav>
    </header>
    );
}

export default Header;
