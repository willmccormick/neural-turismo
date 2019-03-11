var ship;
var cowboys = [];
var bullets = [];

function setup() {
  createCanvas(600, 400);
  ship = new Ship();
  //bullet = new Bullet(width/2, height/2);
  for (var i = 0; i < 8; i++) {
    cowboys[i] = new Cowboy(i * 80 + 80, 20);
  }
}

function draw() {
  background(51);
  ship.show();

  for (var i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();

    for (var j = 0; j < cowboys.length; j++) {
      if (bullets[i].hits(cowboys[j])) {
        console.log("CONTACT");
        cowboys[j].dissapear();
        bullets[i].dissapear();
      }
    }
  }

  for (var k = 0; k < cowboys.length; k++) {
    cowboys[k].show();
  }

  for (var a = cowboys.length - 1; a >= 0; a--) {
    if (cowboys[a].toDelete) {
      cowboys.splice(a, 1);
    }
  }

  for (var a = bullets.length - 1; a >= 0; a--) {
    if (bullets[a].toDelete) {
      bullets.splice(a, 1);
    }
  }
}

function keyPressed() {

  if (key === ' ') {
    var bullet = new Bullet(ship.x + 10, height);
    bullets.push(bullet)
  }

  if (keyCode === RIGHT_ARROW) {
    ship.move(1);
  }
  if (keyCode === LEFT_ARROW) {
    ship.move(-1);
  }
}
