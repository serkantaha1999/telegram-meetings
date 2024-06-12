import React from 'react';
import {navConfig} from "./Navbar";
import {NavLink} from "react-router-dom";

const FooterNavbar = () => {
    return (
        <nav className="footer__menu">
            <ul className="footer__list">
                {navConfig.map((item, i) => (
                    <li key={i} className="footer__item">
                        <NavLink to={item.link} key={i} className="footer__lin link">{item.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default FooterNavbar;