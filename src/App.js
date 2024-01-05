import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
    ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) Creating a function called drawCard so we can put conditions.
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) Everytime a card is draw, it is random. So the rank and suit are plugged in the system and it randomizes by the .random and the .length plugs in the whole array. in this coding, we are getting 1 card from draw that is why there is a -1. so it is subtracting 1 suit and rank from the array.
    if (hand.indexOf(draw) === -1) {
      // 3) Getting 1 card from draw that is why there is a -1. So it is subtracting 1 suit and rank from the array. The code explains that creating a new array from "hand" and adding new values at the end of the array.
      setHand([...hand, draw])
      // 4) Creating a new array from "hand" and adding new values at the end of the array.
    } else if (hand.length !== 52) {
      // 5) Checking if it is not equal to 52. I believe it will stop drawing when it reaches the end of the draw. Draw a card and update the hand.
      drawCard()
      // 6) Draws a card and update the hand.
    } else {
      // 7) Explains that when the 52 cards have been drawn, it would alert us that "All cards have been dealt."
      alert("All cards have been dealt, click OK. To restart game, click Return Cards and Shuffle Deck.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    const shuffleArray =[...hand]
    setHand([])
  }

  return (
    <>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </>
  )
}

export default App
