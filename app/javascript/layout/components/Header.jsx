import React, {useEffect, useState} from 'react';
import {RiMediumFill} from "react-icons/ri";
import {FaXTwitter} from "react-icons/fa6";
import Logo from "../shared/Logo";
import Navbar from "./Navbar";
import {useLocation} from "react-router-dom";


const Header = () => {
    const [isBurger, setIsBurger] = useState(false);
    const location = useLocation()
    const onClickToBurger = () => {
        setIsBurger(prevState => !prevState)
        document.body.style.overflow = !isBurger ? "hidden" : ""
    }
    useEffect(() => {
        setIsBurger(false)
        document.body.style.overflow = "";
    }, [location]);
    return (
        <header id="header" className="header lock-padding">
            <div className="header-top">
                <p className="header-top__text">The artificial intelligence of our project is constantly improving, the
                    latest version is 1.20 🎉🎊</p>
            </div>
            <div className="header__container">
                <div className="header__body">
                    <Logo imageUrl={"/images/logo.svg"} classnames={"header__logo"}/>
                    <Navbar isBurger={isBurger} />
                    <div className="header__block">
                        <a href="/" className="header__social">
                            <FaXTwitter />
                        </a>
                        <a href="/" className="header__social">
                            <RiMediumFill />
                        </a>
                    </div>
                    <button onClick={onClickToBurger} className={`icon-menu ${isBurger && "_active"}`}><span></span></button>
                </div>
            </div>
        </header>
    );
};

export default Header;