import "./puzzle.css"
import kuva from "../../img/puzzle.png"

const Puzzle = () => {
    return (
        <div className="peli4">
            <div className="p-left">
                <div className="p-left-wrapper">
                    <h1 className="p-name">Puzzle Pieces but better</h1>
                    <h2 className="p-intro">A silly 2D platformer where you, a tiny chick, are tasked to save the whole world!</h2>
                </div>
            </div>
            <div className="p-right">
                <div className="p-bg"></div>
                <img src={kuva} alt="" className="p-img" />
            </div>
        </div>
    )
}

export default Puzzle