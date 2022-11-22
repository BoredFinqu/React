import Intro from "./components/intro/Intro";
import OneWay from "./components/OneWay/OneWay";
import Campfire from "./components/campfire/Campfire";
import Lives from "./components/lives/Lives";
import Puzzle from "./components/Puzzle/Puzzle";

const App = () => {
    return (
        <div>
            <Intro />
            <OneWay />
            <Campfire />
            <Lives />
            <Puzzle />
        </div>
    )
}

export default App;
