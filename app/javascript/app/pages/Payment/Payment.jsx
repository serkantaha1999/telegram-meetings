import React from 'react';
import Faq from "../Home/components/Faq";

const Payment = () => {
    return (
        <div>
            <section className="section__payment payment">
                <div className="payment__container">
                    <div className="payment__body">
                        <div className="payment__total">
                            <div className="payment__info">
                                <p className="payment__sum">Total: $13.99</p>
                                <p className="payment__text">When paying with cryptocurrency, the commission is on the
                                    sender</p>
                            </div>
                            <ul className="payment__list">
                                <li className="payment__point">Consolidation of up to 10 chats</li>
                            </ul>
                            <button className="payment__button button button-green">Buy</button>
                        </div>
                        <a href="/" className="payment__method">
                            <img src="/images/payment/01.png" alt="Payment-Method"/>
                        </a>
                        <a href="/" className="payment__method">
                            <img src="/images/payment/02.png" alt="Payment-Method"/>
                            <span>Cryptocurrency 80+</span>
                        </a>
                    </div>
                </div>
            </section>
            <Faq/>
        </div>
    );
};

export default Payment;