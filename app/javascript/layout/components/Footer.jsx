import React from 'react';
import {FaXTwitter} from "react-icons/fa6";
import {RiMediumFill} from "react-icons/ri";
import Logo from "../shared/Logo";
import FooterNavbar from "./FooterNavbar";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__body">
                    <Logo imageUrl={"/images/footer-logo.svg"} classnames={"footer__logo"} />
                    <FooterNavbar/>
                    <div className="footer__block">
                        <a href="https://x.com/GatherumApp" className="footer__social">
                            <FaXTwitter/>
                        </a>
                        <a href="https://medium.com/@Gatherum" className="footer__social">
                            <RiMediumFill/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;