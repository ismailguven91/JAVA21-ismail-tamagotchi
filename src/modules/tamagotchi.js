export class Tamagotchi {
  #hungerLevel = 5;
  #happinessLevel = 5;
  #name;
  #type;

  constructor(name, type) {
    this.#name = name;
    this.#type = type;
  }

  getName() {
    return this.#name;
  }
  getType() {
    return this.#type;
  }

  getHungerLevel() {
    return this.#hungerLevel;
  }

  getHappinessLevel() {
    return this.#happinessLevel;
  }

  hungerDrain() {
    setInterval(() => {
      if (this.#hungerLevel < 10) {
        this.#hungerLevel += 1;
        document.querySelector("#pHunger").innerText = this.#hungerLevel;
      }
      if (this.#hungerLevel == 10) {
        var okToRefresh = confirm("Tama died because he was unhappy! PRESS OK TO PLAY AGAIN");
      if (okToRefresh)
	{
			setTimeout("location.reload(true);",1500);
	}
      }
    }, 3000);
  }

  happinessDrain() {
    setInterval(() => {
      if (this.#happinessLevel > 0) {
        this.#happinessLevel -= 1;
        document.querySelector("#pHappy").innerText = this.#happinessLevel;
      }
      if (this.#happinessLevel == 0) {
        var okToRefresh = confirm("Tama died of starving! PRESS OK TO PLAY AGAIN");
      if (okToRefresh)
	{
			setTimeout("location.reload(true);",1500);
	}
      }
    }, 3000);
  }

  retartGame() {
    if (this.#happinessLevel == 0 || this.#hungerLevel == 10) {
      location.reload();
    }
  }

  feed() {
    this.#hungerLevel -= 1;
    console.log(this.feed);
  }

  play() {
    this.#happinessLevel += 1;
  }

  isTamaDead() {
    if (this.#happinessLevel == 0 || this.#hungerLevel == 10) {
      return true;
    } else {
      return false;
    }
  }
}