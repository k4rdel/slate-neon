//COMMENT

const number = 69;
const text = "I love neons!!!";
let isThatTrue = true;

function showNeons(whatNeons) {
  if (whatNeons) {
    console.log("There are no neons :/");
  } else {
    console.log("Look at this!!!");
  }
}

showNeons(redNeon);

class Neons {
  constructor(blueNeons) {
    this.redNeons = blueNeons;
  }
  showIt() {
    console.log(`This is: ${this.redNeons}`);
  }
}

const myTheme = new Neons("It is neons!");
myTheme.showIt();