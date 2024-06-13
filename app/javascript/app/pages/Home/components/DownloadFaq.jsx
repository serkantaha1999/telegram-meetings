import React from 'react';

const DownloadFaq = ({onClickJoin}) => {
    return (
        <div className="faq__download download-faq">
            <h2 className="download-faq__title section-title">Download application</h2>
            <p className="download-faq__text item-text">The app is only available on macOS and Windows
                devices, adaptation to mobile devices will be available soon</p>
            <button onClick={onClickJoin} className="download-faq__button button button-green">Download ( 1.20 Actual )</button>
        </div>
    );
};

export default DownloadFaq;