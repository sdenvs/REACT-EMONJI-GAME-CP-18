// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topscore} = props
  return (
    <nav className="bgNavbar navbar align-middle">
      <div className="d-flex flex-row">
        <img
          className="logo-image"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <p className="nav-heading">Emonji Game</p>
      </div>
      <div className="d-flex">
        <p>
          Score: <span>{score}</span>
        </p>
        <p>
          TopScore: <span>{topscore}</span>
        </p>
      </div>
    </nav>
  )
}

export default NavBar
