
interface SwiperPaginationProps{
    page: number,
}

const SwiperPagination = (props: SwiperPaginationProps) => {
    return (
        <div className="main-square-swiper-switch">
            <div className="main-square-swiper-switch-pagination">0{props.page}/06</div>
            <button className="main-square-swiper-switch-button"><img src={require("../images/Vector2.svg")} /></button>
            <button className="main-square-swiper-switch-button"><img src={require("../images/Vector1.svg")} /></button>
        </div>


    )
}

export default SwiperPagination