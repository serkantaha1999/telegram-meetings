import React from 'react';

const Security = () => {
    return (
        <section className="section__security security">
            <div className="security__container">
                <div className="security__body">
                    <div className="security__content">
                        <h2 className="security__title">We guarantee the security of your data. </h2>
                        <p className="security__text">Ai training does not use personal information*</p>
                    </div>
                    <div className="security__image">
                        <img src="/images/security/image.png" alt="Security-Image"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Security;