import React from "react"
import { useRef } from "react";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';




interface CircleButtonProps {
    firstYear: (value: number) => void,
    secondYear: (value: number) => void,
    num: number,
    label: string,
    back: (value: number) => void;
}

gsap.registerPlugin(useGSAP);

const CircleButton = (props: CircleButtonProps) => {
    const rot = () => {
        let angle = 360 / props.num
        gsap.to(
            ".main-square-circle-buttons",
            {
                duration: 1,
                rotation: `+=${angle}`
            }
        )
        gsap.to(
            ".main-square-circle-buttons-single",
            {
                rotation: `-=${angle}`
            }
        )
        console.log("call successful")
    }




    const test = (t: number) => {
        props.firstYear(t);
        props.secondYear(t);
        props.back(t);
        rot();
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
        </div >
    )
}

export default CircleButton