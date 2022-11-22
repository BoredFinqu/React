import "./intro.css"
import bgg from "../../img/backg.jpg"

const Intro = () => {
    return (
        <div className="ni">
            <img src={bgg} alt="" className="ni-bg" />
            <div className="ni-left">
                <div className="ni-left-wrapper">
                    <h2 className="ni-intro">Hello, my name is</h2>
                    <h1 className="ni-name">Tuuli-Inkeri Hietala</h1>
                </div>
            </div>
        </div>
    )
}

export default Intro