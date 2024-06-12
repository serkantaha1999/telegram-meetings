import React from 'react';
import Intro from "./components/Intro";
import Advantages from "./components/Advantages";
import Security from "./components/Security";
import Faq from "./components/Faq";
import SimpleSlider from "./components/Carousel";
const HomePage = () => {
    return (
        <>
            <Intro/>
            <Advantages/>
            <Security/>
            <SimpleSlider/>
            <Faq/>
        </>
    );
};

export default HomePage;