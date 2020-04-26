import Cards from './cards'
import Board from './board'

export default class Game {
  constructor () {
    this.cards = new Cards()
    this.board = new Board()
    this.selectedCards = []
    this.youWin = document.createElement('section')
    this.playBtn = document.createElement('button')
    document.addEventListener('click', this.clickCard.bind(this))
    document.addEventListener('click', this.playAgain.bind(this))
  }

  init() {
    if (this.board.gameTitle.innerText === '') document.body.prepend(this.board.gameTitle)
    this.board.createBoard(this.cards.shuffleCards())
    this.playBtn.innerText = 'play again'
    this.youWin.appendChild(this.playBtn)
    this.youWin.classList.add('hide')
    document.body.appendChild(this.youWin)
  }

  clickCard() {
    event.target.matches('.back') ? this.flipCards(event.target) : ''
  }


  flipCards(currentCard) {
    const parentCard = currentCard.parentNode
    const front = currentCard.nextElementSibling.querySelector('.fas')
    parentCard.style.transform = 'rotateY(180deg)'
    this.selectedCards.push(front)
    if (this.selectedCards.length === 2) {
      this.clickDisable(true)
      this.compareCards()
    }
  }

  clickDisable(disable) {
    const cardList = document.getElementsByClassName('back')
    for (let i = 0; i < cardList.length; ++i) {
      disable ? cardList[i].classList.add('back--disable') : cardList[i].classList.remove('back--disable')
    }
  }

  compareCards() {
    if (this.selectedCards[0].className === this.selectedCards[1].className) {
      this.cards.updateCardList(this.selectedCards)
      this.selectedCards = []
      this.clickDisable(false)
      this.checkEnd()
    } else {
      setTimeout(() => {
        this.selectedCards.forEach(card => card.closest('li').style.transform = 'rotateY(0deg)')
        this.selectedCards = []
        this.clickDisable(false)
      }, 1000)
    }
  }

  checkEnd() {
    if (this.cards.cards.length === 0) setTimeout(() => this.youWin.classList.remove('hide'), 1000)
  }

  playAgain() {
    if (event.target.matches('button')) {
      document.body.getElementsByTagName('ul')[0].querySelectorAll('li').forEach(n => n.remove())
      this.init()
    }
  }

}
