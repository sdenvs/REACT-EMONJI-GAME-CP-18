// Write your code here.
import './index.css'

const EmonjiCard = props => {
  const {details, shuffledEmojisList} = props
  const {emojiName, emojiUrl, id} = details
  const shuffleList = () => {
    shuffledEmojisList(id)
  }
  return (
    <li
      onClick={shuffleList}
      className="emojiCard d-flex flex-row justify-content-center align-items-center m-1 m-md-2"
    >
      <button>
        <img alt={emojiName} className="emojiImage" src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmonjiCard
