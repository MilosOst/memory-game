import { useEffect, useState } from "react";
import Card from "./Card.js";

// Import Images
import davis from "../images/anthony-davis.png";
import paul from "../images/chris-paul.png";
import lillard from "../images/damian-lillard.png";
import booker from "../images/devin-booker.png";
import giannis from "../images/giannis-antetokounmpo.png";
import morant from "../images/ja-morant.png";
import harden from "../images/james-harden.png";
import tatum from "../images/jayson-tatum.png";
import embiid from "../images/joel-embiid.png";
import durant from "../images/kevin-durant.png";
import irving from "../images/kyrie-irving.png";
import james from "../images/lebron-james.png";
import doncic from "../images/luka-doncic.png";
import jokic from "../images/nikola-jokic.png";
import curry from "../images/steph-curry.png";



function GameContainer(props) {
    let options = [
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
            name: "Jayson Tatum",
            src: tatum,
        },
        {
            name: "Joel Embiid",
            src: embiid,
        },
        {
            name: "Kevin Durant",
            src: durant,
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
            name: "Steph Curry",
            src: curry,
        },
    ];

    const [players, setPlayers] = useState(options);

    useEffect(() => {
        const shuffleCards = () => {
            for (let i = options.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = options[i];
                options[i] = options[j];
                options[j] = temp;
            }
            setPlayers(options);
        };

        shuffleCards();
    }, [props.score]);

    return (
        <div className="game-container">
            {players.map((player) => {
                return <Card
                    key={player.name}
                    name={player.name} src={player.src}
                    incrementScore={props.incrementScore}
                    resetScore={props.resetScore}
                    score={props.score}
                    />
            })}
        </div>
    );
}


export default GameContainer;