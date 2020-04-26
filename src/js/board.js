export default class Board {

  constructor () {
    this.gameTitle = document.createElement('h1')
    this.gameBoard = document.createElement('ul')
  }
  
  createBoard(cards) {
    this.gameTitle.innerHTML = 'Animals Memory game'
    cards.forEach(card => {
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
      this.gameBoard.appendChild(cardList)
      document.body.appendChild(this.gameBoard)
    })
  }
}
