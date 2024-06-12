import React from 'react';

const Popup = ({children, isOpenPopup, classnames}) => {

    return <div className={isOpenPopup ? "popup active": "popup"}>
        <div className="popup__body">
            <div className={`popup__content ${classnames}`}>
                {children}
            </div>
        </div>
    </div>
};

export default Popup;