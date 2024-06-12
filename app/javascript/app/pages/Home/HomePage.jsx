import React from 'react';
import Intro from "./components/Intro";
import Advantages from "./components/Advantages";
import Security from "./components/Security";
import Faq from "./components/Faq";
const HomePage = () => {
    return (
        <>
            <Intro/>
            <Advantages/>
            <Security/>
            <Faq/>
        </>
    );
};

export default HomePage;