import { useState } from "react";
import Card from "./Card";
import EndGame from "./EndGame";
import "../App.css";

export default function GameBoard({ boardImages ,toRestartGameShffle}) {
  // state of open cards list - empty list
  const [openCards, setOpenCards] = useState([]);
  // state of matches cards
  const [matchCards, setMatchCards] = useState([]);

  // function to handle filp on click
  function handleFlip(index) {
    // if the card all ready fliped
    if (openCards.includes(index) || matchCards.includes(index)) {
      return;
    }
    // if 2 open do nothing
    if (openCards.length === 2) {
      return;
    }

    // add the card
    const newOpenCards = [...openCards, index];
    setOpenCards(newOpenCards);

    // if now the seconed card open we need to check a match
    if (newOpenCards.length === 2) {
      const first = newOpenCards[0];
      const second = newOpenCards[1];

      if (boardImages[first] === boardImages[second]) {
        setMatchCards(prev => [...prev, first, second]);
        // now it will by empty
        setOpenCards([]);
      } else {
        // wait until the cards will flip back
        setTimeout(() => {
          setOpenCards([]);
        }, 800);
      }
    }
  }
  // val to keep if the game is over
  const gameOver = matchCards.length === boardImages.length;

  // function to restart a game
  function restart() {
    setMatchCards([]);
    setOpenCards([]);
    toRestartGameShffle();
  }

  return (
    <>
      <div className="board">
        {boardImages.map((img, index) => (
          <Card
            key={img + index}
            image={img}
            isFlipped={openCards.includes(index) || matchCards.includes(index)}
            onFlip={() => handleFlip(index)}
          />
        ))}
      </div>
        {gameOver && <EndGame toRestart={restart}/>}
    </>
  );
}
