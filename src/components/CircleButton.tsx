import React from "react"
import { useRef } from "react";
import gsap from "gsap"
import { useGSAP } from '@gsap/react';




interface CircleButtonProps {
    firstYear: (value: number) => void,
    secondYear: (value: number) => void,
    backnum: number,
    num: number,
    label: string,
}

gsap.registerPlugin(useGSAP);

const CircleButton = (props: CircleButtonProps) => {
    const rot = (value: number) => {
        let angle = value * 90
        gsap.to(
            ".main-square-circle-buttons",
            {
                duration: 1,
                rotation: `+=${angle}`
            }
        )
        gsap.to(
            ".main-square-circle-buttons",
            {
                duration: 1,
                rotation: `-=${angle}`,
            }
        )
        console.log("call successful")
    }

    const test = (t: number) => {
        props.firstYear(t);
        props.secondYear(t);
        rot(t)
    }

    return (
        <div
            className={props.num == props.backnum ? "main-square-circle-buttons-active" : "main-square-circle-buttons-single"}
            onClick={() => test(props.num)}
        >
            <div
                className="main-square-circle-buttons-single-digit" >
                {props.num}
            </div>
            <div
                className="main-square-circle-buttons-single-label"
            >{props.label}</div>
        </div >
    )
}

export default CircleButton