class Structure {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 25;
    this.width = 25;
    //this.type = type;
  }

  draw() {
    push();
    angleMode(DEGREES);
    rectMode(CENTER);

    translate(this.x, this.y);
    rotate(45);
    rect(0, 0, this.height, this.width, 5);
    pop();
  }
}
