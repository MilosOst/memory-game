import { useState } from "react";

export default function Card(props) {


    return (
        <div className="card">
            <div className="image-box">
                <img src={props.src} alt={props.name} />
            </div>
            <h4 className="player-name">{props.name}</h4>
        </div>
    );
}