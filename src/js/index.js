import Board from './board'
import styles from '../css/styles.scss'

let cards = [
  { name: 'cat', id: '0' },
  { name: 'crow', id: '1' },
  { name: 'frog', id: '2' },
  { name: 'spider', id: '3' },
  { name: 'horse', id: '4' },
  { name: 'hippo', id: '5' },
  { name: 'cat', id: '6' },
  { name: 'crow', id: '7' },
  { name: 'frog', id: '8' },
  { name: 'spider', id: '9' },
  { name: 'horse', id: '10' },
  { name: 'hippo',id: '11' }
]

const game = new Board(cards, [])

document.addEventListener('DOMContentLoaded', () => {
  let title = document.createElement('h1')
  title.innerHTML = 'Animals Memory game'
  document.body.prepend(title)
  game.shuffleCards()
})
