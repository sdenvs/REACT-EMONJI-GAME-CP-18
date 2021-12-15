/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/
import NavBar from '../NavBar'
import EmonjiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

const {Component} = require('react')

// Write your code here.
class EmojiGame extends Component {
  constructor(props) {
    super(props)
    const {emojisList} = this.props
    this.state = {
      emojisList,
      status: true,
      gameList: [],
      score: 0,
      topscore: 0,
    }
  }

  shuffledEmojisList = id => {
    const {emojisList, score, gameList} = this.state
    const newList = emojisList.sort(() => Math.random() - 0.5)
    if (gameList.includes(id)) {
      this.setState({
        status: false,
      })
    } else {
      if (score === 11) {
        this.setState(prev => ({status: false}))
      }
      this.setState(prev => ({
        emojisList: newList,
        gameList: [...gameList, id],
        score: score + 1,
      }))
    }
  }

  gameMode = () => {
    const {emojisList} = this.state
    return (
      <div className="d-flex flex-row justify-content-center align-items-center">
        <ul className="ulList d-flex justify-content-center mt-3 flex-wrap">
          {emojisList.map(eachItem => (
            <EmonjiCard
              shuffledEmojisList={this.shuffledEmojisList}
              key={eachItem.id}
              details={eachItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  resultMode = () => {
    const {score} = this.state
    return (
      <div className="d-flex flex-row justify-content-center align-items-center">
        <WinOrLoseCard retartGame={this.retartGame} score={score} />
      </div>
    )
  }

  retartGame = () => {
    const {emojisList} = this.props
    const {topscore, score} = this.state
    this.setState({
      emojisList,
      status: true,
      gameList: [],
      score: 0,
      topscore: topscore < score ? score : topscore,
    })
  }

  render() {
    const {score, status, topscore} = this.state
    return (
      <div className="bgContainer">
        <div>
          <NavBar status={status} score={score} topscore={topscore} />
        </div>

        {status ? this.gameMode() : this.resultMode()}
      </div>
    )
  }
}

export default EmojiGame
