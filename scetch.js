var car;


function setup(){
    window.canvas = createCanvas(1800,1000);
    carSprite = loadImage("Pix/car.png");
    trackSprite = loadImage("Pix/track.png");
    car = new Car ();
    
    
    
}

function draw(){
    background(100);
    image(trackSprite, -this.width + 1800, -this.height +1000, this.width  -0, this.height -0);
    car.render();
    car.turn(0);
    car.update(0);
    
    
    


}


