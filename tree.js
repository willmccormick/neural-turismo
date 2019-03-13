function Tree(rx,ry,red,green,blue)
{
    this.rx = rx;
    this.ry = ry;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.px=this.rx;
    this.px=this.ry;
    this.show = function(){
        fill(100,50,20);
        noStroke();
        rect(this.px -10, this.py, 20, 40);
        fill(this.red,this.green,this.blue);
        ellipse(this.px,this.py-15,45,45);
        ellipse(this.px-20,this.py-5,30,30);
        ellipse(this.px+15,this.py-10,35,35);
    }
    this.scroll = function(dpx,dpy){
        this.px=this.rx-dpx;
        this.py=this.ry-dpy;
        
    } 
    
}

