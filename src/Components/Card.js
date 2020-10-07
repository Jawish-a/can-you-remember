import React, { useState } from "react"
import ReactCardFlip from "react-card-flip"; /* 1 */

// Card Back Image
import cardBack from "../images/CardBack.jpg";

const Card = ({ card }) => {
    const [flipped, changeFlip] = useState(false);
    const handleFlip = () => {
        changeFlip(!flipped);
    }
    return (
        <div className="col-3 my-y">
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