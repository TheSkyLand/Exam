import React from "react"
import gsap from "gsap"

interface CircleButtonProps {
    firstYear: (value: number) => void,
    secondYear: (value: number) => void,
    num: number,
    label: string,
    back: (value: number) => void;
}


const CircleButton = (props: CircleButtonProps) => {
    const test = (t: number) => {
        props.firstYear(t);
        props.secondYear(t);
        props.back(t);
        rotate(angle, rot)
    }
    let angle = 360 / 6;
    let rot = 0;
    function rotate(angle, rot) {
        for(let i = 0; i > 6; i++)
        {
            gsap.to(`"main-square-circle-buttons-single":nth-of-type(${i})`, { 
                duration: 1.5,
                transform: rot * 1, 
                translate: 530 / 2, 
                rotate: rot * -1 })
        }
    }


    return (
        <div
            className="main-square-circle-buttons-single"
            onClick={() => test(props.num)}
        >
            <div className="main-square-circle-buttons-single-digit" >
                {props.num}
            </div>
            <div
                className="main-square-circle-buttons-single-label"
            >{props.label}</div>
        </div>
    )
}

export default CircleButton