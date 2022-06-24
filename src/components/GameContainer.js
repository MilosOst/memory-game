import { useState } from "react";
import Card from "./Card.js";

// Import Images
import wiggins from "../images/andrew-wiggins.png";
import davis from "../images/anthony-davis.png";
import paul from "../images/chris-paul.png";
import lillard from "../images/damian-lillard.png";
import booker from "../images/devin-booker.png";
import mitchell from "../images/donovan-mitchell.png";
import giannis from "../images/giannis-antetokounmpo.png";
import morant from "../images/ja-morant.png";
import harden from "../images/james-harden.png";
import brown from "../images/jaylen-brown.png";
import tatum from "../images/jayson-tatum.png";
import butler from "../images/jimmy-butler.png";
import embiid from "../images/joel-embiid.png";
import towns from "../images/karl-anthony-towns.png";
import durant from "../images/kevin-durant.png";
import middleton from "../images/khris-middleton.png";
import irving from "../images/kyrie-irving.png";
import james from "../images/lebron-james.png";
import doncic from "../images/luka-doncic.png";
import jokic from "../images/nikola-jokic.png";
import gobert from "../images/rudy-gobert.png";
import curry from "../images/steph-curry.png";
import young from "../images/trae-young.png";



function GameContainer() {
    let options = [
        {
            name: "Andrew Wiggins",
            src: wiggins,
        },
        {
            name: "Anthony Davis",
            src: davis,
        },
        {
            name: "Chris Paul",
            src: paul,
        },
        {
            name: "Damian Lillard",
            src: lillard,
        },
        {
            name: "Devin Booker",
            src: booker,
        },
        {
            name: "Donovan Mitchell",
            src: mitchell,
        },
        {
            name: "Giannis Antetokounmpo",
            src: giannis,
        },
        {
            name: "Ja Morant",
            src: morant,
        },
        {
            name: "James Harden",
            src: harden,
        },
        {
            name: "Jaylen Brown",
            src: brown,
        },
        {
            name: "Jayson Tatum",
            src: tatum,
        },
        {
            name: "Jimmy Butler",
            src: butler,
        },
        {
            name: "Joel Embiid",
            src: embiid,
        },
        {
            name: "Karl Anthony Towns",
            src: towns,
        },
        {
            name: "Kevin Durant",
            src: durant,
        },
        {
            name: "Khris Middleton",
            src: middleton,
        },
        {
            name: "Kyrie Irving",
            src: irving,
        },
        {
            name: "Lebron James",
            src: james,
        },
        {
            name: "Luka Doncic",
            src: doncic,
        },
        {
            name: "Nikola Jokic",
            src: jokic,
        },
        {
            name: "Rudy Gobert",
            src: gobert,
        },
        {
            name: "Steph Curry",
            src: curry,
        },
        {
            name: "Trae Young",
            src: young,
        },
    ];

    const [players, setPlayers] = useState(options);

    return (
        <div className="game-container">
            {players.map((player) => {
                return <Card key={player.name} name={player.name} src={player.src}/>
            })}
        </div>
    );
}


export default GameContainer;