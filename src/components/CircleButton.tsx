

interface CircleButtonProps {
    num: number
}


const CircleButton = (props: CircleButtonProps) => {

    return(
        <button
        className="main-square-circle-buttons-single"
        >{props.num}</button>
    )
}

export default CircleButton