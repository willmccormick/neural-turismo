var direction = 90;
var turnRadius = 0;
var speed = 40; // Amount the car moves per click
var seedsArray = [];
var carsFitness = [];
var carsArray = [];
var topCarIndex = 0;
var topFittness = 1000;
var arrayIndex = 0;
var randNum;
var randString = "";
var carAmount = 100;

function setup() {
  createCanvas(1000, 800);
  //creating 100 car sprites
  for (var i = 0; i < carAmount; i++) {
    carsArray[i] = createSprite(30 + (9*i), height / 2, 6, 12);
  }

  generateSeeds();
  testSeeds();
  reviewSeeds();
}

function draw() {
  background(50, 50, 50);
  fill(300);
  ellipse(carsArray[topCarIndex].position.x,carsArray[topCarIndex].position.y, 55, 55);
  /* // MANUAL COMMANDS
  if (keyDown(40)) { // DOWN_ARROW
    //car.setSpeed(speed, direction);
    car.position.y += speed;
  } else if (keyDown(38)) { // UP_ARROW
    //car.setSpeed(speed, direction + 180)
    car.position.y -= speed;
  }*/

  drawSprites();
}

function generateSeeds() {

  // Generates the seeds needed for a first random generation
  for (var cars = 0; cars < carAmount; cars++) {
    for (var i = 0; i < 10; i++) {
      randString += Math.round(Math.random());; // 0 or 1 random
    }

    seedsArray[cars] = randString;
    randString = ""; // reset string after adding it
  }
}

// Going to test all cars at one time
function testSeeds() {

  // For loop to get all of the cars
  for (var c = 0; c < carAmount; c++) {
    // Checking each part of the string (1 is up 0 is down)
    for (var s = 0; s < 10; s++) {
      if (seedsArray[c].charAt(s) === "1") {
        carsArray[c].position.y -= speed; // if there is a 1 go up
      } else {
        carsArray[c].position.y += speed; // if there is a 0 go down
      }
    }
  }

  console.log("Generation Tested");
}

function reviewSeeds() {

  // Finds the car that traveled the farthest up
  for (var c = 0; c < carAmount; c++) {
    if (carsArray[c].position.y < topFittness) {
      topCarIndex = c;
      topFittness = carsArray[c].position.y;
    } else {
      console.log(carsArray[c].position.y + " is not less than " + topFittness);
    }
  }

  console.log("Fittest Car is number " + topCarIndex + "\nWith a distance of " + (carsArray[topCarIndex].position.y - height / 2) * -1);

}
