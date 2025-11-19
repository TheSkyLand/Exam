import gsap from "gsap"
import Swiper from "swiper"
import "../styles/index.scss"
import CircleButton from "../components/CircleButton"

const MainPage = () => {
    let p = [];
    for (let i = 1; i < 7; i++) {
        p.push(i);
    }

    return (
        <div className="main">
            <div className="main-square">
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
                            <CircleButton num={index}></CircleButton>
                        )) 
                        }
                    </div>

                </div>
                <div className="main-square-numbers">
                    <span className="main-square-numbers-first">2015</span>
                    <span className="main-square-numbers-second">2025</span>
                </div>
            </div>
        </div >

    )
}

export default MainPage