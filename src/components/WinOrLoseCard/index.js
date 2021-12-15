// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, retartGame} = props
  const restart = () => {
    retartGame()
  }

  const wonGame = () => (
    <div className="resultB d-flex flex-column justify-content-center align-items-center p-3">
      <img
        className="winImage m-3"
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
      />
      <h1 className="h3 text-light">You Won</h1>
      <p className="h5 text-light">best Score</p>
      <p className="h3 text-primary">{score}/12</p>
      <button onClick={restart} className="btn btn-warning">
        Play Again
      </button>
    </div>
  )

  const loseGame = () => (
    <div className="resultB d-flex flex-column justify-content-center align-items-center p-3">
      <img
        className="winImage m-3"
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
      />
      <h1 className="h3 text-light">You Lose</h1>
      <p className="h5 text-light">Score</p>
      <p className="h3 text-primary">{score}/12</p>
      <button onClick={restart} className="btn btn-warning">
        Play Again
      </button>
    </div>
  )

  return (
    <div className="winlosecard d-flex flex-column align-items-center mt-5">
      {score === 12 ? wonGame() : loseGame()}
    </div>
  )
}

export default WinOrLoseCard
