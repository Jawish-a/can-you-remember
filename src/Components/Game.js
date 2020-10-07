import React, { useEffect, useState } from "react";
import "../App.css";
import Score from "./Score"
//Data
import allCards from "../data";

// Utils
import { shuffle } from "../utils";

// Components
import Card from "./Card";

const Game = ({ difficulty, mode }) => {
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

    const [score, setScore] = useState([0, 0]);
    const [playerTurn, setPlayerTurn] = useState(true);
    const [failedFlips, increaseFailedFlips] = useState(0);

    let flippedCards = [];

    const changeFlipped = (anArray) => {
        flippedCards = anArray;
    }

    const unflipCards = (unflip1, unflip2) => {
        setTimeout(() => {
            unflip1(false);
            unflip2(false);
        }, 1000)
    }

    const checkFlipped = flippedObject => {
        changeFlipped([...flippedCards, flippedObject])
        console.log(flippedCards);
        if (flippedCards.length === 2) {
            if (flippedCards[0].id !== flippedCards[1].id) {
                unflipCards(flippedCards[0].changeFlip, flippedCards[1].changeFlip);
                increaseFailedFlips(failedFlips + 1);
                setPlayerTurn(!playerTurn);
            } else {
                if (mode === "multi") {
                    if (playerTurn) {
                        setScore([score[0] += 1, score[1]])
                    }
                    else {
                        setScore([score[0], score[1] += 1])
                    }
                }
            }
            changeFlipped([])
        }
    }

    // const cardsGrid = cards.map((card, idx) => (
    //     <Card key={`${card.id}-${idx}`} card={card} />
    // ))
    const cardList = cards.map((card, idx) => (
        <Card key={`${card.id}-${idx}`} card={card} checkFlipped={checkFlipped} />
    ))
    return (
        <div className="container">
            <div className="row">
                <div className="col-9">
                    <div className="row border">
                        {cardList}
                    </div>
                    <Score mode={mode} failedFlips={failedFlips} playerTurn={playerTurn} score={score} />
                </div>
            </div>
        </div>
    );
}

export default Game;
