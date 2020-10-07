import React from "react"

const Card = ({card}) => {
    return (
        <div className="col-3 my-y">
            <img className="mx-auto" src={card.front} height="100%" width="100%" key="front" alt="" />
        </div>
    );
};

export default Card;