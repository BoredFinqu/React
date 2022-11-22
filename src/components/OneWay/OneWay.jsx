import "./oneWay.css"
import kuva from "../../img/forward.PNG"

const OneWay = () => {
    return (
        <div className="peli1">
            <div className="f-left">
                <div className="f-left-wrapper">
                    <h1 className="f-name">One Way Forward</h1>
                    <h2 className="f-intro">You are looking for a way out of the dark cave by going one way forward.</h2>
                </div>
            </div>
            <div className="f-right">
                <div className="f-bg"></div>
                <img src={kuva} alt="" className="f-img" />
            </div>
        </div>
    )
}

export default OneWay