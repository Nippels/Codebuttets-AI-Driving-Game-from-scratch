// Das Auto (Car) wird hier als Funktion mit Position(pos x,y), 
// Form(rect), Größe(width,height), Ausrichtung (heading), sowie mit
// den Eigenschaften Rotation (rotation), Geschwindigkeit(vel), 
// Beschleunigung(force), grafischer Darstellung(render), 
// Dynamik (translate für dynamisches Rendern, update für
// dynamische Eigenschaftswerte) konstruiert. 


function Car (x, y) {
    
    this.pos = createVector(width/2, height/2);
    this.x = -20;
    this.y = -40;
    this.width = 40;
    this.height = 80;  
    this.heading = PI/-2;
    this.turn = function(){
        this.heading += this.rotation;
    }
    this.rotation = 0;
    this.setRotation = function(a){
        this.rotation = a;
    }
    this.vel = createVector (0,0);
    this.thrust = function(){
        var force = p5.Vector.fromAngle(this.heading);
        //change the value of force multiplier to set the speed
        force.mult(0.5);
        this.vel.add(force);
    }
    this.isThrusting = false;
    this.thrusting = function (b){
        this.isThrusting =b;
    }
    this.update = function (){
        if (this.isThrusting){
            this.thrust ();
        }
        this.pos.add(this.vel)
        //change the value of velocity multiplier to set the friction
        this.vel.mult(0.95);
    }
    
    this.render = function () {
        translate(this.pos.x, this.pos.y);
        rotate (this.heading + PI/2);
        fill(255, 150, 0);
        stroke(0);
        rect(this.x, this.y, this.width, this.height);
    
    
    }
    

    
// Die Tastenerkennung (Keypressed/released) ist mit entsprechender
// Wertbeänderung für die Bewegungseigenschaften (setRotation,
// thrusting) des Objekts (Car) bestimmt. 

// Try to solve that issue with pressing/holding 2 keys simultaneously
    
}



function keyPressed() {
    switch (keyCode) {
        case RIGHT_ARROW:
        car.setRotation(0.1);
        break;
        case LEFT_ARROW:
        car.setRotation(-0.1);
        break;
        case UP_ARROW:
        car.thrusting(true);
        break;
       
    }
}

function keyReleased() {
    car.setRotation(0);
    car.thrusting(false);
}