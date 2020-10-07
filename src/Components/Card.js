import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"; /* 1 */

// Card Back Image
import cardBack from "../images/CardBack.jpg";

const Card = ({ card, checkFlipped }) => {
    const [flipped, changeFlip] = useState(false);
    const handleFlip = () => {
        if (flipped !== true) {
            changeFlip(true);
            checkFlipped({ id: card.id, changeFlip: changeFlip});
        };
    };
    return (
        <div className="col-3 my-1">
            <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
                <img className="mx-auto"
                    src={cardBack}
                    height="100%" width="100%" key="front" alt=""
                    onClick={() => handleFlip()} />
                <img className="mx-auto"
                    src={card.front}
                    height="100%" width="100%" key="front" alt=""
                    onClick={() => handleFlip()} />
            </ReactCardFlip>
        </div>
    );
};

export default Card;