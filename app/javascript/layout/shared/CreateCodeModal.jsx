import React, {useEffect, useState} from 'react';
import Modal from "./ui/Modal";
import Logo from "./Logo";
import {CopyToClipboard} from "react-copy-to-clipboard/src";
import DownloadButton from "./DownloadButton";
import {handleDownload} from "../utils/utils";

const CreateCodeModal = (props) => {
    const [code, setCode] = useState("");
    const onClick = () => {
        props.onClose()
        handleDownload()
    }
    useEffect(() => {
        setCode(generateCode());
    }, []);
    const generateCode = () => {
        const randomNumber = Math.floor(10000 + Math.random() * 90000);
        return `G${randomNumber}`;
    };
    return (
        <Modal {...props}>
            <Modal.Logo>
                <button onClick={props.onClose} className="popup__close"/>
                <Logo classnames={"popup__logo"} imageUrl={"/images/logo.svg"}/>
            </Modal.Logo>
            <Modal.Body>
                <form className="form-time form-time_code">
                    <label className="form-time__label">
                        <input defaultValue={code} type="text" readOnly className="form-time__input"/>
                    </label>
                </form>
                <p className="popup__text">If the application does not download, <a className="download_button">click on
                    the text</a></p>
            </Modal.Body>
            <Modal.Footer>
                <div className="popup__buttons">
                    <CopyToClipboard text={code}>
                        <button className="button button-green">Copy</button>
                    </CopyToClipboard>
                    <DownloadButton onClick={onClick} theme={"light"} text={"Join"}/>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateCodeModal;