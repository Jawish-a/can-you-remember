import React, { useEffect, useState } from "react";
import "../App.css";

//Data
import allCards from "../data";

// Utils
import { shuffle } from "../utils";

// Components
import Card from "./Card";

const Game = ({ difficulty }) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        let cards = allCards;
        switch (difficulty) {
            case "easy":
                cards = allCards.slice(0, 6);
                break;
            case "medium":
                cards = allCards.slice(0, 8);
                break;
            default:
                break;
        }
        setCards(() => shuffle([...cards, ...cards]))
    }, [difficulty])

    const cardsGrid = cards.map((card, idx) => (
        <Card key={`${card.id}-${idx}`} card={card} />
    ))
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="row border">
                        {cardsGrid}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Game;
