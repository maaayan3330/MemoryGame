import {useState} from 'react';
import CLOSE from '../assets/flipcard.png';
// The Card component goal:
// 1 - present a diff img every time
// 2 - state to control a card is open(true) or close(false) - flip them on click

export default function Card({image}) {
    // at the beiging the card close => false
    const [isFlipped, setIsFlipped] = useState(false);

    // function to handle filp on click
    function handleFlip() {
        setIsFlipped(!isFlipped);
    }
    return(
        <div className="card" onClick={handleFlip}>
        <div className={isFlipped ? "card-inner flipped" : "card-inner"}>
            
            <div className="card-front">
            <img src={image} />
            </div>

            <div className="card-back">
            <img src={CLOSE} />
            </div>

        </div>
        </div>
    );
}