import React from 'react';

const Intro = ({onClickCreate, onClickJoin}) => {
    return (
        <>
            <section className="section__intro intro">
                <div className="intro__container">
                    <div className="intro__body">
                        <div className="intro__content">
                            <h1 className="intro__title page-title">Gatherum: <span>Canadian <img src="/images/🇨🇦.png"
                                                                                                  alt="Stickers Country"/></span> revolutionary
                                AI
                                solution in the field of communications</h1>
                            <p className="intro__text"><span>In the period of globalization, even knowledge</span> of
                                two languages limits human productivity,
                                so we are pleased to present a product that will solve this problem. </p>
                            <p className="intro__competitors">#1 Among competitors within the country</p>
                            <div className="intro__buttons">
                                <button onClick={onClickCreate} className="intro__button button button-green">Create
                                    room</button>
                                <button onClick={onClickJoin} className="intro__button popup__link button button-light">Join
                                    room</button>
                            </div>
                        </div>
                        <div className="intro__image">
                            <img src="/images/intro/image.png" alt="Intro-Image"/>
                            <span>Translated with AI</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Intro;