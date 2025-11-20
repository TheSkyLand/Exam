import React from "react"


interface CircleButtonProps {
    num: number,
    label: string,
    back: (value: number) => void;
}


const CircleButton = (props: CircleButtonProps) => {
    const [currentNum, setCurrentNum] = React.useState(0);

    const test = (t: number) => {

        props.back(t);
    }
    return (
        <div
            className="main-square-circle-buttons-single"
        >
            <button 
            className="main-square-circle-buttons-single-inner"
            onClick={() => test(props.num)}>{props.num}</button>
            <div>{props.label}</div>
        </div>
    )
}

export default CircleButton