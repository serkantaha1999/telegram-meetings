import React, {useEffect, useState} from 'react';
import Modal from "./ui/Modal";
import Logo from "./Logo";
import DownloadButton from "./DownloadButton";

const JoinModal = (props) => {
    const [code, setCode] = useState("")
    const onClose = () => {
        props.onClose()
    }
    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const numericPart = inputValue.substring(1);
        if (/^\d{0,5}$/.test(numericPart)) {
            setCode(`G${numericPart}`);
        }
    };
    useEffect(() => {
        if (!props.open) {
            setCode("")
        }
    }, [props.open]);
    return (
        <Modal {...props}>
            <Modal.Logo>
                <button onClick={onClose} className="popup__close"/>
                <Logo classnames={"popup__logo"} imageUrl={"/images/logo.svg"}/>
            </Modal.Logo>
            <Modal.Body>
                <form className="form-time form-time_code">
                    <label className="form-time__label">
                        <input onChange={handleInputChange} value={code} placeholder={"XXXXXX"} type="text" className="form-time__input"/>
                    </label>
                </form>
                <p className="popup__text">Enter your Meeting ID</p>
            </Modal.Body>
            <Modal.Footer>
                <div className="popup__buttons">
                    <DownloadButton onClose={props.onClose} theme={"green"} text={"Join"}/>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default JoinModal;