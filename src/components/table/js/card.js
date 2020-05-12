export default class CardJS { 
  constructor(v, s, i) { 
    this.v = v;
    this.s = s;
    this.i = i;
    this.image = `img/cards/${this.v}${this.s}.png`;
    this.id = `${this.v.toLowerCase()}${this.s.toLowerCase()}`;
    this.held = false;
  }
}