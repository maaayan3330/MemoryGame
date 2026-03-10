import "./App.css";
import { useState } from "react";
import Header from "./components/Header.jsx";
import GameBoard from "./components/GameBoard.jsx";

// images for the board
import AMY from "./assets/Amy.jpg";
import DIAZ from "./assets/diaz.jpg";
import CHARLES from "./assets/charles.jpg";
import HITCHOCOK from "./assets/hitchocok.jpg";
import HOLT from "./assets/holt.jpg";
import JAKE from "./assets/jake-peralta.jpg";
import JINA from "./assets/Jina.jpg";
import TERRY from "./assets/terry.jpg";

function App() {
  const images = [AMY, DIAZ, CHARLES, HITCHOCOK, HOLT, JAKE, JINA, TERRY];
  // create a state for the board so i will be able to do shuffle
  const [boardImages, setBoardImages] = useState(
    shuffle([...images, ...images]),
  );

  function shuffle(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  function restartGame() {
    setBoardImages(shuffle([...images, ...images]));
  }

  return (
    <>
      <Header />
      <GameBoard boardImages={boardImages} toRestartGameShffle={restartGame}/>
    </>
  );
}

export default App;
