function Ship() {
  this.x = width/2; // Make it start at the center

  this.show = function() {
    fill(255); // make white
    rect(this.x, height - 50, 20, 50);
  }

  this.move = function(dir) {
    this.x += dir * 5;
  }
}
