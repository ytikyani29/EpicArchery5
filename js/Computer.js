class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");
    this.life1 = 'green'
    this.life2 = 'green'
    this.life3 = 'green'
  

    World.add(world, this.body);
  }

 
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
  life() {
    push();
    textSize(20);
    fill("white");
    text("Computer",width - 280,40);
  
    fill(this.life1);
    rect(width - 380,50,70,30);
    fill(this.life2);
    rect(width - 310, 50 ,70 , 30);
    fill(this.life3);
    rect(width - 240,50,70,30);
    pop();
    }
}
