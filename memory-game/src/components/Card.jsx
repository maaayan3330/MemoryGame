import React from "react";
import {useState} from React
// The Card component goal:
// 1 - present a diff img every time
// 2 - be able to flip them on click
// 3 - state to control a card is open(true) or close(false)

export default function Card({image}) {
    // at the beiging the card close => false
    const [isFlipped, setIsFlipped] = useState(false);
    return(
        <div className="card">
            <img src={image} alt="character"/>
        </div>
    );
}