import React, { Component } from "react";
import Slider from "react-slick";
const Carousel = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 9,
        autoplay: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '0'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '0'
                }
            }
        ]
    };
    return (
        <section className="section__ability ability">
            <div className="ability__container">
                <div className="ability__body">
                    <div className="ability__info">
                        <h2 className="ability__title section-title">Ability to integrate into applications</h2>
                        <p className="ability__text item-text">To get things done on time and auto-fill call dates. Making life easier! Integrated in 20+ Apps.</p>
                    </div>
                    <div className="ability-slider">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides ability-slider__wrapper">
                                <Slider {...settings}>
                                    <li className="ability-slider__slide glide__slide">
                                        <img src="/images/ability/01.png" alt="Ability-Slide-Image"/>
                                    </li>
                                    <li className="ability-slider__slide glide__slide">
                                        <img src="/images/ability/02.png" alt="Ability-Slide-Image"/>
                                    </li>
                                    <li className="ability-slider__slide glide__slide">
                                        <img src="/images/ability/03.png" alt="Ability-Slide-Image"/>
                                    </li>
                                    <li className="ability-slider__slide glide__slide">
                                        <img src="/images/ability/04.png" alt="Ability-Slide-Image"/>
                                    </li>
                                    <li className="ability-slider__slide glide__slide">
                                        <img src="/images/ability/05.png" alt="Ability-Slide-Image"/>
                                    </li>
                                    <li className="ability-slider__slide glide__slide">
                                        <img src="/images/ability/06.png" alt="Ability-Slide-Image"/>
                                    </li>
                                    <li className="ability-slider__slide glide__slide">
                                        <img src="/images/ability/07.png" alt="Ability-Slide-Image"/>
                                    </li>
                                    <li className="ability-slider__slide glide__slide">
                                        <img src="/images/ability/08.png" alt="Ability-Slide-Image"/>
                                    </li>
                                    <li className="ability-slider__slide glide__slide">
                                        <img src="/images/ability/09.png" alt="Ability-Slide-Image"/>
                                    </li>
                                </Slider>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;