import React from 'react';
import {IoIosArrowDown} from "react-icons/io";

const Accordion = ({onClick, text, isOpen, title}) => {
    const contentHeight = React.useRef(null)
    const accordionStyle = isOpen ? {height: contentHeight.current?.scrollHeight} : {height: 0}
    return (
        <div className={`spollers__item ${isOpen ? 'active' : ''}`}>
            <button onClick={onClick} type="button" className="spollers__title"><span>{title}</span><span><IoIosArrowDown /></span></button>
            <div style={accordionStyle} className="spollers__body">
                <p ref={contentHeight}>{text}</p>
            </div>
        </div>
    );
};

export default Accordion;