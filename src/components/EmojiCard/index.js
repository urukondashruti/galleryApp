// Write your code here.
import './index.css'

const Card = props => {
  const {onClickEmoji, Items} = props
  const {id, emojiName, emojiUrl} = Items

  const onClickBut = () => {
    onClickEmoji(id)
  }

  return (
    <li className="list1">
      <button type="button" className="button" onClick={onClickBut}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default Card
