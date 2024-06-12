import React from 'react';

const DownloadButton = ({theme, text, onClose}) => {
    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob(["This is a fake executable file."], { type: "application/octet-stream" });
        element.href = URL.createObjectURL(file);
        element.download = "fake-file.exe";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        onClose()
    };
    return (
        <button onClick={handleDownload} className={`button button-${theme}`}>{text}</button>
    );
};

export default DownloadButton;