import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const goToNextMonth = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1));
    };

    const goToPrevMonth = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1));
    };

    const populateDates = () => {
        const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
        const lastDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);

        const firstDayOfWeek = firstDayOfMonth.getDay();
        const daysInMonth = lastDayOfMonth.getDate();

        const days = [];
        const startDate = new Date(firstDayOfMonth);
        for (let i = 0; i < firstDayOfWeek; i++) {
            days.push(null);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(new Date(startDate.setDate(i)));
        }

        return days;
    };

    const handleDayClick = (selectedDay) => {
        setSelectedDate(selectedDay);
    };

    return (
        <div className="date-picker-wrapper">
            <div className="selected-date">{selectedDate.toLocaleDateString()}</div>
            <div className="dates-container">
                <div className="month">
                    <div className="arrows prev-month" onClick={goToPrevMonth}>
                        <IoIosArrowBack />
                    </div>
                    <div className="month-item">{selectedDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</div>
                    <div className="arrows next-month" onClick={goToNextMonth}>
                        <IoIosArrowForward />
                    </div>
                </div>
                <div className="days-container">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
                        <div key={index} className="day-column">{day}</div>
                    ))}
                    {populateDates().map((day, index) => {
                        if (day) {
                            return <div onClick={() => handleDayClick(day)} key={index} className={`day ${day.getDate() === selectedDate.getDate() && "selected"}`}>
                                {day ? day.getDate() : ""}
                            </div>
                        }
                    })}
                </div>
            </div>
        </div>
    );
};

export default DatePicker;
