import React from 'react';
import {Link} from "react-router-dom";

const Logo = ({classnames, imageUrl}) => {
    return (
        <Link to="/" className={classnames}>
            <img src={imageUrl} alt="Header-Logo"/>
        </Link>
    );
};

export default Logo;