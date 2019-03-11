function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 8;
  this.toDelete = false;

  this.dissapear = function() {
    this.toDelete = true;
  }

  this.show = function() {
    noStroke();
    fill(100,0,200);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.hits = function(cowboy) {
    var d = dist(this.x, this.y, cowboy.x, cowboy.y);
    if (d < this.r + cowboy.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.y = this.y - 5;
  }
}
