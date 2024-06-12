import React from "react";

const ModalBody = ({ children, className, ...props }) => {
    return (
        <div
            {...props}
            className={className}
        >
            {children}
        </div>
    );
};

export default ModalBody;