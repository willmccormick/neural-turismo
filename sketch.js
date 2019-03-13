var trees = [];
var px=0;
var py=0;
var hero;

function setup() {
  
    
    createCanvas(1200, 550);
  for (var i = 0; i <= 10; i++) {
      for (var j = 0; j<=10; j++){
          trees[i*11+j]=new Tree(200*i+Math.floor(Math.random()*400),
                                 200*j+Math.floor(Math.random()*400),
                                 Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256))
          
      }
  }
    var img = new Image();
    var img = loadImage('shrek.png');
    hero = createSprite(height/2,width/2);
    hero.addImage(img);
    
}

function draw() {
    if (keyDown(39)) 
    //right
    {
        px = px +2;
    }
    if (keyDown(37)) 
    //left
    {
        px = px-2;
    }
    if (keyDown(40)) 
    //down
    {
        py +=2;
    }
    if (keyDown(38))
    //up arrow
    {
        py +=-2;
    }
    
    background(30,150,40);
    for (i=0; i<=120;i++){
        trees[i].scroll(px,py);
        trees[i].show();
    }
    //var img = new Image();
    
    //var ctx = canvas.getContext('2d');
    
    //img.src = 'shrek.png';
    //ctx.drawImage(img, 500, 200);
    
}
