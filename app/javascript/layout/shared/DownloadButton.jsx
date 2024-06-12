import React from 'react';

const DownloadButton = ({theme, text, onClick}) => {
    return (
        <button onClick={onClick} className={`button button-${theme}`}>{text}</button>
    );
};

export default DownloadButton;