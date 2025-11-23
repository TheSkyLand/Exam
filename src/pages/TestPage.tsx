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


const TestPage = () => {
    const [inputNum, setInput] = React.useState('');
    const [firstYear, setFirstYear] = React.useState("1980")
    const [secondYear, setSecondYear] = React.useState("1986")
    const [counter, setCounter] = React.useState(1);
    

    const backFirstYear = (value: string) => {
        setFirstYear(value.toString());
    }

    const backSecondYear = (value: string) => {
        setSecondYear(value.toString());
    }

    const backCounter = (value: number) => {
        setCounter(value)
    }

    {
        SwiperData.map((index, key) => {

            {
                index.data.map((index, key) => {
                    console.log(index.date, index.info)
                })
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
                                firstYear={() => backFirstYear(item.firstYear)}
                                secondYear={() => backSecondYear(item.secondYear)}
                                rotate={() => backCounter(item.id)}
                                num={item.id}
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
                            onClick={() => setCounter(counter - 1)}
                        ><img src={require("../images/Vector2.svg")} /></button>
                        <button
                            className="main-square-swiper-switch-button"
                            onClick={() => setCounter(counter + 1)}
                        ><img src={require("../images/Vector1.svg")} /></button>
                    </div>

                    <Swiper
                        navigation={true}
                        slidesPerView={3}
                        modules={[Navigation]}
                        className="main-square-swiper-dates">
                        {SwiperData.map((index) => (
                            <SwiperSlide
                                className="main-square-swiper-dates-events">
                                <div className="main-square-swiper-dates-events-year">{index.id}</div>
                                <div className="main-square-swiper-dates-events-info">{index.id}</div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div >
    )
}

export default TestPage

