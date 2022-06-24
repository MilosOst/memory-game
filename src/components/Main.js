import GameContainer from "./GameContainer.js";

function Main(props) {
    return (
        <main className="content">
            <GameContainer
            incrementScore={props.incrementScore}
            resetScore={props.resetScore}
            score={props.score}
            />
        </main>
    );
}

export default Main;