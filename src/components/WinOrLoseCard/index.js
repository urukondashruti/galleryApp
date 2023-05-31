// Write your code here.
import './index.css'

const Lose = props => {
  const {count, onClickStatus} = props

  const onClickPlay = () => {
    onClickStatus()
  }

  if (count === 12) {
    return (
      <div className="div1">
        <div className="div2">
          <div>
            <h1>You Won</h1>
            <p>Best Score</p>
            <p>{count}/12</p>
            <button type="button" onClick={onClickPlay} className="button1">
              Play Again
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
              className="size"
              alt="win or lose"
            />
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="div1">
      <div className="div2">
        <div>
          <h1>You Lose</h1>
          <p>Score</p>
          <p>{count}/12</p>
          <button type="button" className="button1" onClick={onClickPlay}>
            Play Again
          </button>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            className="size"
            alt="win or lose"
          />
        </div>
      </div>
    </div>
  )
}

export default Lose
