import "./lives.css"
import kuva from "../../img/9lives.png"

const Lives = () => {
    return (
        <div className="peli3">
            <div className="l-left">
                <div className="l-left-wrapper">
                    <h1 className="l-name">9 Lives</h1>
                    <h2 className="l-intro">A visual novel that has 9 different stories of cats and their struggles to turn back to human.</h2>
                </div>
            </div>
            <div className="l-right">
                <div className="l-bg"></div>
                <img src={kuva} alt="" className="l-img" />
            </div>
        </div>
    )
}

export default Lives