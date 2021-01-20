class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = 0
  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1
    }, 1000);
  }
  getMinutes() {
    let minutes = Math.floor(this.currentTime / 60)
    return minutes 
  }
  getSeconds() {
    let seconds = this.currentTime % 60
    return seconds
  }
  twoDigitsNumber() {
    if (number < 10) {
      return "0" + number.toString();
    } else {
      return number.toString();
    }
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    let output = `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
    return output;
  }
}
