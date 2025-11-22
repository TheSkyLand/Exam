import CircleButton from "../components/CircleButton"
import { YearsData } from '../helpers/YearsData';
import { SwiperData } from "../helpers/SwiperData";
import React, { useState } from 'react';
import "../styles/test.scss"

import gsap from "gsap";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);


import { Swiper, SwiperSlide } from "swiper/react"
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';



const DraftPage = () => {
    const [inputNum, setInput] = React.useState('');
    const [firstYear, setFirstYear] = React.useState("1980")
    const [secondYear, setSecondYear] = React.useState("1986")
    const [counter, setCounter] = React.useState(1);

    const counterUp = (year: number, value: number) => {
        for (let i = year; i == value; i++) {
            year++;
        }
        return year;
    }





    const backNum = (value: number) => {
        setInput(value.toString());
        setCounter(value)
    }

    const backFirstYear = (value: string) => {
        setFirstYear(value.toString());
    }

    const backSecondYear = (value: string) => {
        setSecondYear(value.toString());
    }


    return (
        <div className="main">
            <div className="main-square">
                <div className="main-square-years">
                    <span
                        className="main-square-years-first">{firstYear}</span>
                    <span className="main-square-years-second">{secondYear}</span>
                </div>
                <div className="main-square-text">
                    <div className="main-square-text-divider" />
                    <div className="main-square-text-label">
                        <span className="main-square-text-label-upper">Исторические</span>
                        <span className="main-square-text-label-lower">даты</span>
                    </div>
                </div>
                <div className="main-square-line-horizontal" />
                <div className="main-square-line-vertical" />
                <div className="main-square-circle" >
                    <div className="main-square-circle-buttons">
                        {YearsData.map((item, key) => (
                            <CircleButton
                                firstYear={() => backFirstYear(item.firstYear)}
                                secondYear={() => backSecondYear(item.secondYear)}
                                num={item.id}
                                label={item.label}
                                back={backNum}
                            />
                        ))
                        }
                    </div>
                </div>

            </div>
            <div className="main-square-swiper">

                <div className="main-square-swiper-switch">
                    <div className="main-square-swiper-switch-pagination">
                        <div className="main-square-swiper-switch-pagination-button">
                        </div>
                        <div className="main-square-swiper-switch-pagination-button">
                        </div>
                    </div>
                </div>

                <Swiper
                    className="main-square-swiper-dates"
                    slidesPerView={3}
                    spaceBetween={80}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                >
                    {SwiperData.map((item, key) => (
                        <SwiperSlide
                            className="main-square-swiper-dates-events"
                        >
                            <div className="main-square-swiper-dates-events-year">{item.date}</div>
                            <div className="main-square-swiper-dates-events-info">{item.info}</div>
                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>

        </div>
    )
}

export default DraftPage