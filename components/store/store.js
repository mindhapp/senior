import { makeAutoObservable } from "mobx";
const ISSERVER = typeof window === "undefined";
class Store {
  character = ['', '', '', ''];
  names = null;
  constructor() {
    makeAutoObservable(this);
  }

  addCharacter(c) {
    // const lastChar = this.character[this.character.length - 1]

    // if (this.character.length > 0 && lastChar['question'] === c['question']) {
    //   this.character[this.character.length - 1]['character'] = c['character']
    // } else {
    //   this.character.push(c);
    // }
    if (ISSERVER)
      localStorage.setItem(c.index, c.character)

    //It work!!! but can't refresh
    // this.character[c.index] = c.character
    // this.character.push(c);

    console.log(c);
    console.log(this.character);

  }


  addNames(n) {
    this.names = n;
    console.log(n);
  }

  clearData() {
    this.character = [];
    console.log(this.character);
  }
}

export const store = new Store();
