import React from "react";

import Modal from "./ui/Modal";
import Logo from "./Logo";
import DatePicker from "./DatePicker";

const DatePickerModal = ({openNewModal, options}) => {
    const onClick = () => {
        options.onClose()
        openNewModal()
    }
    const onClose = () => {
        options.onClose()
    }
    return (
        <Modal {...options}>
            <Modal.Logo>
               <Logo classnames={"popup__logo"} imageUrl={"/images/logo.svg"}/>
            </Modal.Logo>
            <Modal.Body>
                <DatePicker/>
            </Modal.Body>
            <Modal.Footer>
                <div className="popup__buttons">
                    <button onClick={onClick} className="button button-green">Continue</button>
                    <button onClick={onClose} className="button button-light close-popup">Cancel</button>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default DatePickerModal;