import { useState } from "react";

export default function Scoreboard(props) {

    return (
        <div className="scoreboard">
            <h4>Score: {props.score}</h4>
            <h4>High Score: {props.highScore}</h4>
        </div>
    );
}