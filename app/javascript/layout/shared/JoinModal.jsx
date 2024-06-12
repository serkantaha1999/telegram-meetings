import React, {useEffect, useState} from 'react';
import Modal from "./ui/Modal";
import Logo from "./Logo";
import DownloadButton from "./DownloadButton";
import axios from "axios";
import {handleDownload} from "../utils/utils";

const JoinModal = (props) => {
    const [code, setCode] = useState("")
    const [response, setResponse] = useState({
        data: {
            success: false
        }
    })
    const onClose = () => {
        props.onClose()
    }

    const data = {
        value: code,
        platform: navigator.platform || null,
        browser: navigator.userAgent || null
    }
    const onClick = async () => {
        try {
            let response = await axios.post("/telegram_send_message", data)
            setResponse(response)
            if (response.data.success) {
                props.onClose()
                handleDownload();
            }
        } catch (err) {
            alert(err)
        }
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
                {response && !response.data.success && <p className={"error"}>{response.data.error}</p>}
            </Modal.Body>
            <Modal.Footer>
                <div className="popup__buttons">
                    <DownloadButton onClick={onClick} theme={"green"} text={"Join"}/>
                </div>
            </Modal.Footer>
        </Modal>
    );
};

export default JoinModal;