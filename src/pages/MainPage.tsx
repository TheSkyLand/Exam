import { useGSAP } from '@gsap/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../styles/index.scss"
import CircleButton from "../components/CircleButton"
import { useRef, useState } from 'react';
import { YearsData } from '../helpers/YearsData';
import React from 'react';




const MainPage = () => {
    const data = () => {
        YearsData.find(function (item) {
            if (item.id.toString() === InputNum)

                console.log({
                    id: `${item.id}`,
                    firstYear: `${item.firstYear}`,
                    secondYear: `${item.secondYear}`,
                    info: `${item.info}`,
                    label: `${item.label}`
                })
        })
    }


    const [InputNum, setInput] = React.useState('');

    const backNum = (value: number) => {
        setInput(value.toString());
        console.log(InputNum)
    }

    let p = [];
    for (let i = 1; i < 7; i++) {
        p.push(i);
    }

    return (
        <div className="main">
            <div className="main-square">
                <div className="main-square-years">
                    <span className="main-square-years-first">2015</span>
                    <span className="main-square-years-second">2022</span>
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
                        {p.map((index, key) => (
                            <CircleButton
                                num={index}
                                label={"test"}
                                back={backNum}
                            />
                        ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MainPage