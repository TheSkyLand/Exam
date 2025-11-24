import CircleButton from "../components/CircleButton"
import { YearsData } from '../helpers/YearsData';
import { SwiperData } from "../helpers/SwiperData";
import React from 'react';

import "../styles/index.scss"
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';

import "swiper/css"
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { data } from "react-router-dom";
import { it } from "node:test";


const TestPage = () => {
    const [firstYear, setFirstYear] = React.useState("1980")
    const [secondYear, setSecondYear] = React.useState("1986")
    const [counter, setCounter] = React.useState(1);

    const plswork = SwiperData.filter(item => item.id == counter)


    const activate = (fv: number) => {
        setCounter(fv)

        if (fv > 6) {
            setCounter(1)
            setFirstYear("1980")
            setSecondYear("1986")
        } else if (fv < 1) {
            setCounter(6)
            setFirstYear("2015")
            setSecondYear("2022")
        }


        YearsData.map((index, key) => {
            if (fv === index.id) {
                setFirstYear(index.firstYear)
            }
        })
        YearsData.map((index, key) => {
            if (fv === index.id) {
                setSecondYear(index.secondYear)
            }
        })

    }





    return (
        <div className="main">
            <div className="main-square">
                <div className="main-square-years">
                    <span className="main-square-years-first">{firstYear}</span>
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
                                firstYear={() => setFirstYear(item.firstYear)}
                                secondYear={() => setSecondYear(item.secondYear)}
                                backCounter={() => setCounter(key + 1)}
                                num={key + 1}
                                backnum={counter}
                                label={item.label}

                            />
                        ))
                        }
                    </div>
                </div>
                <div className='main-square-swiper'>
                    <div className="main-square-swiper-switch">
                        <div className="main-square-swiper-switch-pagination">0{counter}/06</div>
                        <button
                            className="main-square-swiper-switch-button"
                            onClick={() => activate(counter - 1)}
                        ><img src={require("../images/Vector2.svg")} /></button>
                        <button
                            className="main-square-swiper-switch-button"
                            onClick={() => activate(counter + 1)}
                        ><img src={require("../images/Vector1.svg")} /></button>
                    </div>

                    <Swiper
                        navigation={true}
                        slidesPerView={3}
                        modules={[Navigation]}
                        className="main-square-swiper-dates">
                        {plswork.map(index => (
                            <div>
                                {index.data.map(item => (
                                    <SwiperSlide>
                                        <div
                                            className="main-square-swiper-dates-events-year"
                                        >
                                            {item.date}
                                        </div>
                                        <div
                                            className="main-square-swiper-dates-events-info"
                                        >
                                            {item.info}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </div>

                        ))}
                    </Swiper>
                </div>
            </div>
        </div >

    )
}


export default TestPage

