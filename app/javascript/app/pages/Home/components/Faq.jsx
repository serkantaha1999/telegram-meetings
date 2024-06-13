import React from 'react';
import Accordion from "../../../../layout/shared/Accordion";

const faqAccordionConfig = [
    {
        title: "Can I change the rate after it has been paid?",
        text: "Yes you can change your subscription level to a higher level at no extra charge if you make a purchase within a week."
    },
    {
        title: "What is the maximum number of participants?",
        text: "The maximum possible number of participants is 5 at the free subscription level, and 30 on the paid ones."
    },
    {
        title: "Can the free version be used coporatively or in a company?",
        text: "Yes, this is an individual issue, please contact technical support about it."
    },
    {
        title: "Why don't older versions work?",
        text: "Older versions are not supported due to the constantly updating artificial intelligence, the application updates itself to the latest versions."
    },
    {
        title: "Is it possible to transfer rights in video calls?",
        text: "To transfer rights to other people you must have any subscription level above the initial one."
    },
    {
        title: "How do I increase my subscription level?",
        text: "To upgrade your subscription make sure you have made a purchase at least 7 days ago and yours has not been paid for by the company."
    },
    {
        title: "Is it possible to recall my purchase?",
        text: "You can return a purchased subscription no more than 3 days after purchase."
    }
]

const Faq = ({children}) => {
    const [accordionActive, setAccordionActive] = React.useState(null)
    return (
        <section className="section__faq faq">
            <div className="faq__container">
                <div className="faq__body">
                    <div className="faq__info">
                        <h2 className="faq__title section-title">Faq</h2>
                    </div>
                    {children}
                    <div className="faq__spollers spollers">
                        {faqAccordionConfig.map((item, id) => {
                            const isOpen = accordionActive === id
                            return <Accordion key={id}  onClick={() => (isOpen ? setAccordionActive(null) : setAccordionActive(id))}
                                               isOpen={isOpen} {...item}/>
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;