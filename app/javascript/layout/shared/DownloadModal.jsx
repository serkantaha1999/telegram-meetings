import React from 'react';
import Modal from "./ui/Modal";
import Logo from "./Logo";

const DownloadModal = (props) => {
    return (
        <Modal {...props}>
            <Modal.Logo>
                <button onClick={props.onClose} className="popup__close"/>
                <Logo classnames={"popup__logo"} imageUrl={"/images/logo.svg"}/>
            </Modal.Logo>
            <Modal.Body>
                <div className={"popup__content"}>
                    <p className="popup__text">In the process of developing a mobile app, sorry for the inconvenience 😔</p>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default DownloadModal;