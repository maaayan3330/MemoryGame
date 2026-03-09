export default function EndGame({toRestart}) {
    return(
        <div className="gameOverBoard">
            <h1>No doubt, no doubt,<br/> no doubt, you won!</h1>
            <button onClick={toRestart}>Play Again</button>
        </div>
    );
}