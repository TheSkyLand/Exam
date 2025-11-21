import { Swiper } from 'swiper/react';
import { SwiperData } from '../helpers/SwiperData';

interface SwiperSectionProps{
    date: string,
    info: string,
}

const SwiperSection = (props: SwiperSectionProps) => {
    return (
        <Swiper 
        draggable="true"
        className="main-square-swiper-dates-events">
            <div className="main-square-swiper-dates-events-year">{props.date}</div>
            <div className="main-square-swiper-dates-events-info">{props.info}</div>
        </Swiper>
    )
}

export default SwiperSection;