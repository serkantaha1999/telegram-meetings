import React from 'react';

const advantagesConfig = [
    {
        imageUrl: "images/advantage/microphone.svg",
        title: "Make your voice more beautiful",
        text: "Our trained Ai will help to eliminate unnecessary noise and make the average frequency of your voice and your conversation partner's voice more pleasant."
    },
    {
        imageUrl: "images/advantage/video.svg",
        title: "Get the best video quality",
        isNew: true,
        text: "With image upscaling technology and trained neural communication, we can help you to improve the quality of the output picture.",
    },
    {
        imageUrl: "images/advantage/note.svg",
        title: "Autobriefing your conference",
        isNew: true,
        text: "Instead of unexpected pauses during conferences and losing information with a newly added feature, you can enable autoconferencing."
    }
]

const Advantages = () => {
    return (
        <section className="section__advantages advantages">
            <div className="advantages__container">
                <div className="advantages__body">
                    <div className="advantages__info">
                        <h2 className="advantages__title section-title">Advantages of our product</h2>
                        <p className="advantages__text item-text">Advantages of our product compared to other
                            competitors.</p>
                    </div>
                    <div className="advantages__inner">
                        {advantagesConfig.map((item) => {
                            return <div key={item.title} className="advantages__item item-advantages">
                                <div className="item-advantages__info">
                                    <div className="item-advantages__icon">
                                        <img src={item.imageUrl} alt="Advantage-Icon"/>
                                    </div>
                                    <h3 className="item-advantages__title">
                                        {item.title}
                                        {item.isNew && (
                                            <span>New!</span>
                                        )}
                                    </h3>
                                </div>
                                <p className="item-advantages__text">{item.text}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;