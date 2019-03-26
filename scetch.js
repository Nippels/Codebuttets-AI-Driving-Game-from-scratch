var car;


function setup(){
    window.canvas = createCanvas(1000,500);
    car = new Car ();
    
}

function draw(){
    background(100);
    car.render();
    car.turn(0);
    car.update(0);
    


}


