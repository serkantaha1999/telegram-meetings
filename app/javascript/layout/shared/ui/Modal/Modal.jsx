import ModalLayout from "./ModalLayout";
import ModalLogo from "./ModalTitle";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import React from "react";

const ModalComponent = ({children, ...layoutProps}) => {
    return <ModalLayout {...layoutProps}>{children}</ModalLayout>;
};

const Modal = Object.assign(ModalComponent, {
    Logo: ModalLogo,
    Body: ModalBody,
    Footer: ModalFooter,
});

export default Modal;