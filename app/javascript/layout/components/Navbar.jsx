import React from 'react';
import {NavLink} from "react-router-dom";

export const navConfig = [
    {
        link: "/",
        text: "Advantages"
    },
    {
        link: "/",
        text: "Compatibility"
    },
    {
        link: "/pricing",
        text: "Pricing"
    },
    {
        link: "/",
        text: "FAQ"
    },
    {
        link: "/policy",
        text: "Use Policy"
    },
    {
        link: "/",
        text: "Download"
    }
]

const Navbar = ({isBurger}) => {
    return (
        <nav className="header__menu menu">
            <ul className={`menu__list ${isBurger && "_active"}`}>
                {navConfig.map((item, i) => (
                    <li key={i} className="menu__item">
                        <NavLink to={item.link} key={i} className="menu__link link">{item.text}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;