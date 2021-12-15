// Write your code here.
import './index.css'

const NavBar = props => {
  const {status, score, topscore} = props
  return (
    <nav className="bgNavbar navbar align-middle">
      <div className="d-flex flex-row">
        <img
          className="logo-image"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="nav-heading">Emoji Game</h1>
      </div>
      {status && (
        <div className="d-flex">
          <p>
            Score: <span>{score}</span>
          </p>
          <p>
            Top Score: <span>{topscore}</span>
          </p>
        </div>
      )}
    </nav>
  )
}

export default NavBar
