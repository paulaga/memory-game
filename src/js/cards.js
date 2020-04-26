export default class Cards {

  constructor () {
    this.cards = []
  }

  shuffleCards() { 
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

    this.cards = cards.sort((a, b) => 0.5 - Math.random())
    return this.cards
  }

  updateCardList(selected) {
    selected.forEach(card => {
      this.cards = this.cards.filter(el => el.id !== card.closest('li').id)
      card.parentNode.classList.add('front--disable')
    })
  }

}
