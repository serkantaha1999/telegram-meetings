import Portal from "../../Portal";
import React from "react";

const ModalLayout = ({onClose, open, animation, children}) => {
    if (!open) return null;
    return (
        <Portal target="modals-root">
            <div
                onClick={onClose}
                className={`popup ${!open ? "fade-out" : "fade-in"}`}
            >
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="popup-content"
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};




export default ModalLayout;