import React from 'react';
import Faq from "../Home/components/Faq";
import {Link} from "react-router-dom";

const PricingItem = ({ title, price, per, points, isPopular }) => (
    <div className="pricing__item pricing-item">
        <div className="pricing-item__info">
            {isPopular && <span className="pricing-item__popular">most popular</span>}
            <h4 className="pricing-item__title">{title}</h4>
            <p className="pricing-item__price">{price}</p>
            <p className="pricing-item__per">{per}</p>
        </div>
        <ul className="pricing-item__list">
            {points.map((point, index) => (
                <li key={index} className="pricing-item__point">{point}</li>
            ))}
        </ul>
        <Link to={"/payment"} className="pricing-item__button button button-light">Function available in the app</Link>
    </div>
);

const Pricing = () => {
    return (
        <div>
            <section className="section__pricing pricing">
                <div className="pricing__container">
                    <div className="pricing__body">
                        <PricingItem
                            title="Standard"
                            price="$13.99"
                            per="Per month"
                            points={[
                                "Record and transcribe all your meetings",
                                "Noise reduction of your microphone",
                                "Сamera quality improvement to 4k",
                                "Transferability of rights",
                                "Creating up to 5 groups of participants",
                                "Consolidation of up to 10 chats"
                            ]}
                        />
                        <PricingItem
                            title="Advanced"
                            price="$19.99"
                            per="Per month"
                            points={[
                                "Record and transcribe all your meetings",
                                "Noise reduction of your microphone",
                                "Сamera quality improvement to 4k",
                                "Transferability of rights",
                                "Creating up to 10 groups of participants",
                                "Consolidation of up to 20 chats",
                                "Participation in beta tests",
                                "Early access to functions",
                                "Editing recorded appointments"
                            ]}
                            isPopular={true}
                        />
                        <PricingItem
                            title="Begin"
                            price="$FREE"
                            per="Per month"
                            points={[
                                "Record and transcribe all your meetings",
                                "Noise reduction of your microphone",
                                "Сamera quality improvement to 1080p",
                                "Transferability of rights",
                                "Creating up to 1 group of participants",
                                "Consolidation of up to 3 chats"
                            ]}
                        />
                    </div>
                </div>
            </section>
            <Faq />
        </div>
    );
};

export default Pricing;
