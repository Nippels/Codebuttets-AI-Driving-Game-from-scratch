var car;


function setup() {
    window.canvas = createCanvas(1000,500); 
    car= new Car(width/2, height/2);
}

function draw(){
    background(100);   
    car.show();
    car.move();

}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW:
            car.acc = -0.1;
            break;
        case DOWN_ARROW:
            car.acc = 0.1;
            break;
 // this doesn´t work that way ;)          
        case LEFT_ARROW:
            car.rotate =-1;
            break;
        case RIGHT_ARROW:
            car.rotate = 1;
            break;
    }
} 
 