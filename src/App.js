import React, { useState } from "react";
import "./App.css";

//Data
import allCards from "./data";

// Utils
import { shuffle } from "./utils";

// Components
import Card from "./Components/Card";

function App() {
  const [cards, setCards] = useState(shuffle([...allCards, ...allCards]));

  let cardsGrid = cards.map((card, idx) => (
    <Card key={`${card.id}-${idx}`} card={card} />
  ))
  return <div className="App border my-5">
    <div className="container">
      <div className="row">
        {cardsGrid}
      </div>
    </div>
  </div>;
}

export default App;
