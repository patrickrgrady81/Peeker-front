import CardJS from "./card.js"

export default class DeckJS {
  createDeck() {
    const cards = []
    const suits = ['H', 'D', 'C', 'S'];
    const vals = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']

    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < vals.length; j++) {
        cards.push(new CardJS(vals[j], suits[i]));
      }
    }
    return cards
  }

  shuffleDeck(cards) {
    for (let i = 0; i < cards.length; i++) {
      let pickACard = Math.floor(Math.random() * (cards.length));
      [cards[i], cards[pickACard]] = [cards[pickACard], cards[i]];
    }
  }
}