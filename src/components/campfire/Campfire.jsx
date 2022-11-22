import "./campfire.css"
import kuva from "../../img/campfire.png"

const Campfire = () => {
    return (
        <div className="peli2">
            <div className="c-left">
                <div className="c-left-wrapper">
                    <h1 className="c-name">Campfire</h1>
                    <h2 className="c-intro">You are the protector of the forest guarding a couple of campers from dark shadow monsters!</h2>
                </div>
            </div>
            <div className="c-right">
                <div className="c-bg"></div>
                <img src={kuva} alt="" className="c-img" />
            </div>
        </div>
    )
}

export default Campfire