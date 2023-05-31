// Write your code here.
import './index.css'

const NavBar = props => {
  const {count, status, TopScore} = props

  if (status === true) {
    return (
      <div className="back">
        <div className="con1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="para">Emoji Game</h1>
        </div>
        <div className="con2">
          <p className="para">Score: {count}</p>
          <p className="para">Top Score: {TopScore}</p>
        </div>
      </div>
    )
  }
  return (
    <div className="back">
      <div className="con1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="para">Emoji Game</h1>
      </div>
    </div>
  )
}

export default NavBar
