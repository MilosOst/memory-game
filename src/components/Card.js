import { useEffect, useState } from "react";

function Card(props) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (clicked) {
            props.resetScore();
        }
        else {
            props.incrementScore();
            setClicked(true);
        }
    };

    useEffect(() => {
        if (props.score === 0) setClicked(false);
    }, [props.score]);

    return (
        <div className="card" onClick={handleClick}>
            <div className="image-box">
                <img src={props.src} alt={props.name} />
            </div>
            <h4 className="player-name">{props.name}</h4>
        </div>
    );
}

export default Card;