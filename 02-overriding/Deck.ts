export class Deck {
  private deck: Array<any> = [];

  constructor(
    private _deckName: string,
    private _deckLength: number,
    private _typeDeck: string
  ) {}

  get newDeck() {
    for (let i = 0; i <= this._deckLength; i++) {
      this.deck.push(i);
    }

    const deckStructure = {
      deckName: this._deckName,
      type: this._typeDeck,
      deck: this.deck,
    };

    return deckStructure;
  }
}
