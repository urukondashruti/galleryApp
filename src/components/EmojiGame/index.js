/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import './index.css'

import NavBar from '../NavBar'

import Card from '../EmojiCard'

import Lose from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    count: 0,
    TopScore: 0,
    List: [],
    status: true,
  }

  onClickEmoji = id => {
    const {count, List} = this.state
    const status1 = List.includes(id)

    if (status1 === false) {
      this.setState(prevState => ({List: [...prevState.List, id]}))
      this.setState(prevState => ({count: prevState.count + 1}))
    }
    if (count === 11) {
      this.setState(prevState => ({status: !prevState.status}))
    } else if (status1 === true) {
      this.setState(prevState => ({status: !prevState.status}))
    }
  }

  onClickStatus = () => {
    const {count, TopScore} = this.state
    if (count > TopScore) {
      this.setState({TopScore: count})
    }
    this.setState(prevState => ({status: !prevState.status}))
    this.setState({count: 0})
    this.setState({List: []})
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {emojisList} = this.props

    const shuffledEmojisList = this.shuffledEmojisList()

    const {count, TopScore, List, status} = this.state

    return (
      <div className="backs">
        <NavBar count={count} status={status} TopScore={TopScore} />
        {status ? (
          <div>
            <ul className="unList">
              {shuffledEmojisList.map(each => (
                <Card
                  key={each.id}
                  onClickEmoji={this.onClickEmoji}
                  shuffledEmojisList={this.shuffledEmojisList}
                  Items={each}
                />
              ))}
            </ul>
          </div>
        ) : (
          <Lose count={count} onClickStatus={this.onClickStatus} />
        )}
      </div>
    )
  }
}
export default EmojiGame
