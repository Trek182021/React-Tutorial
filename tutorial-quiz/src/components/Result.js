import React from 'react'

const Result = ({score, playAgain}) => {
    return (
        <div className="result">
            <h1>You're score is : {score}</h1>
            <button className="btn" onClick={playAgain}>Play Again!</button>
        </div>
    )
}

export default Result
