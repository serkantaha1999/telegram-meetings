import React from 'react';
import Intro from "./components/Intro";
import Advantages from "./components/Advantages";
import Security from "./components/Security";
import Faq from "./components/Faq";
import SimpleSlider from "./components/Carousel";
import useModal from "../../../layout/hooks/usePopupControl";
import DatePickerModal from "../../../layout/shared/DatePickerModal";
import TimeModal from "../../../layout/shared/TimeModal";
import CreateCodeModal from "../../../layout/shared/CreateCodeModal";
import JoinModal from "../../../layout/shared/JoinModal";
import DownloadModal from "../../../layout/shared/DownloadModal";
import DownloadFaq from "./components/DownloadFaq";
import {Element} from "react-scroll";
const HomePage = () => {
    const datepickerProps = useModal();
    const timeProps = useModal();
    const createCodeProps = useModal()
    const joinProps = useModal()
    const downloadProps = useModal()
    return (
        <>
            <Intro onClickCreate={datepickerProps.onOpen} onClickJoin={joinProps.onOpen}/>
            <Advantages/>
            <Security/>
            <SimpleSlider/>
            <Element name={"faqBlock"}>
                <Faq>
                    <DownloadFaq onClickJoin={joinProps.onOpen}/>
                </Faq>
            </Element>
            <DatePickerModal openNewModal={timeProps.onOpen} options={datepickerProps} />
            <TimeModal openNewModal={createCodeProps.onOpen} options={timeProps}/>
            <CreateCodeModal openNewModal={downloadProps.onOpen} options={createCodeProps}/>
            <JoinModal openNewModal={downloadProps.onOpen} options={joinProps}/>
            <DownloadModal {...downloadProps}/>
        </>
    );
};

export default HomePage;