import { useState } from "react";
import GameContainer from "./GameContainer.js";

export default function Main(props) {


    return (
        <main className="content">
            <GameContainer incrementScore={props.incrementScore} resetScore={props.resetScore} score={props.score}/>
        </main>
    )
}