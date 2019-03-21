class Car{

    constructor(x, y){
        this.x = x;
        this.y = y;
    //    this.vel = createVector(0,0);
        this.vel =0;
        this.acc =0;
        this.width = 40;
        this.height = 80;
        this.rotate = 0.0;


    }
    show(){
        //translate(this.x + this.width/2,this.y+height/2);
        rotate(0);
        fill(255,100,0);
        stroke(0);
        rect(this.x, this.y, this.width, this.height);
        
        

    }

    move(){
    //    step one was to make the car driving up and down. lines: 7, 27, 28    
        this.vel += this.acc;
        this.y += this.vel;
    //    not quite ;)    
        this.x += this.rotate;
    //    this.rotate = function(x,y,angle)

    //    this ist what I saw from code bullet:

    //    this.vel.x+=this.acc*this.vel.x;
    //    this.vel.y+=this.acc*this.vel.y;
    //    this.y+=this.vel.y;
    //    this.x+=this.vel.x;
        
        
   }
}