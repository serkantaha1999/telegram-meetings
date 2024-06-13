import React from 'react';
import {NavLink, useLocation, useNavigate} from "react-router-dom";
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
        link: "/privacy",
        text: "Use Policy"
    },
    {
        link: "/",
        text: "Download"
    }
]



const Navbar = ({isBurger, scrollToBlock, onClickToBurger}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleMenuClick = (blockId) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => scrollToBlock(blockId), 2000)
        } else {
            scrollToBlock(blockId);
        }
        if (isBurger) {
            onClickToBurger();
        }
    };
    return (
        <nav className="header__menu menu">
            <ul className={`menu__list ${isBurger && "_active"}`}>
                <li className="menu__item">
                    <button className="menu__link link" onClick={() => handleMenuClick("advantagesBlock")}>Advantages</button>
                </li>
                <li className="menu__item">
                    <NavLink to="/" className="menu__link link">Compatibility</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/pricing" className="menu__link link">Pricing</NavLink>
                </li>
                <li className="menu__item">
                    <button className="menu__link link" onClick={() => handleMenuClick("faqBlock")}>FAQ</button>
                </li>
                <li className="menu__item">
                    <NavLink to="/privacy" className="menu__link link">Use Policy</NavLink>
                </li>
                <li className="menu__item">
                    <NavLink to="/" className="menu__link link">Download</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;