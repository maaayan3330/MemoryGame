export default function EndGame({toRestart ,moves}) {
    return(
        <div className="gameOverBoard">
            <h1>No doubt, no doubt, no doubt,<br/>you won in {moves} moves!</h1>
            <button onClick={toRestart}>Play Again</button>
        </div>
    );
}