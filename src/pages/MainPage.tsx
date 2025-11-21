import SwiperPagination from "../components/SwiperPagination";
import SwiperSection from "../components/SwiperSection";
import CircleButton from "../components/CircleButton"
import { YearsData } from '../helpers/YearsData';
import { SwiperData } from "../helpers/SwiperData";
import React from 'react';
import { useSwiper, Swiper, SwiperSlide } from 'swiper/react';
import "../styles/index.scss"
import { useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';


const MainPage = () => {
    const [inputNum, setInput] = React.useState('');
    const [firstYear, setFirstYear] = React.useState("1980")
    const [secondYear, setSecondYear] = React.useState("1986")
    const [page, setPage] = React.useState(1)
    const swiper = useSwiper();



    const backNum = (value: number) => {
        setInput(value.toString());
        console.log(inputNum)
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
                                num={item.id}
                                label={item.label}
                                back={backNum}
                            />
                        ))
                        }
                    </div>
                </div>
                <div className='main-square-swiper'>
                    <SwiperPagination
                    page={page}
                    />
                    <div className="main-square-swiper-dates">
                        {SwiperData.map((item, key) => (
                            <SwiperSection
                                date={item.date}
                                info={item.info}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default MainPage