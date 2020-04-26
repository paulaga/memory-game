import Game from './game';
import styles from '../css/styles.scss'

const game = new Game()

document.addEventListener('DOMContentLoaded', () => {
  game.init()
})
