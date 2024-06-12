import React from "react";
const ModalLogo = ({ children, className, ...props }) => {
    return (
        <div
            {...props}
            className={className}
        >
            {children}
        </div>
    );
};

export default ModalLogo;