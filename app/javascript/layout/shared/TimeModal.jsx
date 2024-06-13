import React from 'react';
import Modal from "./ui/Modal";
import Logo from "./Logo";
import Select from "react-select";
import makeAnimated from 'react-select/animated';
const TimeModal = ({openNewModal, options}) => {
    const selectOptions = [
        { value: 'AEST', label: 'AEST' },
        { value: 'AKST', label: 'AKST' },
        { value: 'AST', label: 'AST' },
        { value: 'AWST', label: 'AWST' },
        { value: 'CAT', label: 'CAT' },
        { value: 'CET', label: 'CET' },
        { value: 'CST', label: 'CST' },
        { value: 'EAT', label: 'EAT' },
        { value: 'EET', label: 'EET' },
        { value: 'EST', label: 'EST' },
        { value: 'GMT', label: 'GMT' },
        { value: 'HAST', label: 'HAST'},
        { value: 'MSK', label: 'MSK' },
        { value: 'MST', label: 'MST' },
        { value: 'NST', label: 'NST' },
        { value: 'PST', label: 'PST' },
        { value: 'UTC', label: 'UTC' },
        { value: 'WAT', label: 'WAT' },
        { value: 'WET', label: 'WET' }
    ];

    const onClick = () => {
        options.onClose()
        openNewModal()
    }
    const onClose = () => {
        options.onClose()
    }
    const animatedComponents = makeAnimated();
    return (
        <Modal {...options}>
            <Modal.Logo>
                <button onClick={onClose} className="popup__close"/>
                <Logo classnames={"popup__logo"} imageUrl={"/images/logo.svg"}/>
            </Modal.Logo>
            <Modal.Body>
                <form className="form-time">
                    <label className="form-time__label">
                        <input type="text" value="10" className="form-time__input"/>
                        <input type="text" value="25" className="form-time__input"/>
                    </label>
                    <Select classNamePrefix={"select"} className={"select"} options={selectOptions}
                            components={animatedComponents}/>
                </form>
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

export default TimeModal;