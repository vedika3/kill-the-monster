class Ball {
    constructor(x, y, width, height) {
      var options = { 
        density: 1, 
        frictionAir: 0.005};
  
      this.body = Bodies.rectangle(mouseX, mouseY, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("imageedit_1_4070056136.png");
     
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  }