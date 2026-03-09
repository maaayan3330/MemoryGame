import CLOSE from '../assets/flipcard.png';
// The Card component goal:
// 1 - present a diff img every time
// 2 - use the function to open(true) or close(false) - flip on click

export default function Card({image , isFlipped , onFlip}) {  
    return(
        <div className="card" onClick={onFlip}>
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