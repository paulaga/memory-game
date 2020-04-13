export default class Board {

  constructor (cards, selectedCards) {
    this.cards = cards
    this.cardsGame = this.cards
    this.selectedCards = selectedCards
    document.addEventListener('click', this.clickCard.bind(this))
    document.addEventListener('click', this.playAgain.bind(this))
  }
  
  shuffleCards() { 
    this.cardsGame = this.cardsGame.sort((a, b) => 0.5 - Math.random())
    this.createBoard()
  }

  createBoard() {
    const gameBoard = document.createElement('ul')
    this.cardsGame.forEach(card => {
      const cardList = document.createElement('li')
      let n = 0
      while(n < 2) {
        cardList.appendChild(document.createElement('div'))
        n++
      }
      cardList.firstChild.setAttribute('class', 'back')
      cardList.lastChild.setAttribute('class', 'front')
      cardList.lastChild.innerHTML = `<i class='fas fa-${card.name}'>`
      cardList.id = card.id
      gameBoard.appendChild(cardList)
      document.body.appendChild(gameBoard)
    })
  }
  
  compareCards() {
    if (this.selectedCards[0].className === this.selectedCards[1].className) {
      this.updateCardList()
    } else {
      setTimeout(() => {
        this.selectedCards.forEach(card => card.closest('li').style.transform = 'rotateY(0deg)')
        this.selectedCards = []
        this.clickDisable(false)
      }, 1000)
    }
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

  updateCardList() {
    this.selectedCards.forEach(card => {
      this.cardsGame = this.cardsGame.filter(cards => cards.id !== card.closest('li').id)
      card.parentNode.classList.add('front--disable')
    })
    this.selectedCards = []
    this.clickDisable(false)
    this.checkEnd()
  }

  checkEnd() {
    if (this.cardsGame.length === 0) {
      let youWin = document.createElement('section')
      let playAgain = document.createElement('button')
      playAgain.innerText = 'play again'
      youWin.appendChild(playAgain)
      setTimeout(() => document.body.appendChild(youWin), 500)
    }
  }

  playAgain() {
    if (event.target.matches('button')) {
      document.body.getElementsByTagName('ul')[0].remove()
      this.cardsGame = this.cards
      setTimeout(() => this.shuffleCards(), 200)
      document.body.getElementsByTagName('section')[0].remove()
    }
  }
}
