import React from "react";
const ModalFooter = ({
                                               children,
                                               className,
                                               ...props
                                           }) => {
    return (
        <div
            {...props}
            className={className}
        >
            {children}
        </div>
    );
};

export default ModalFooter;