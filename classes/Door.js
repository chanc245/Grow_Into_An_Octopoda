class Door {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.length = 100 * imgCom;
    this.width = 50 * imgCom;
    this.rotate = 0;
    this.rotateIn = 0

    this.charCom = 50; //character location compensation -- for location (the born location for the In door)

    this.show = true;
    this.mapOpen = false;
  }

  allOut() {
    this.checkSceneOut();
    this.drawOut();
    this.message();
  }

  allIn() {
    this.checkSceneIn();
    this.drawIn();
    this.message();
  }

  inNout() {
    this.checkSceneOut();
    this.drawOut();

    this.checkSceneIn();
    this.drawIn();

    this.message();
  }

  drawOut() {
    let doorStGlow = color(240, 240, 150); //OUT
    let doorInGlow = color(250, 250, 160); //INSIDE

    if (this.show) {
      push();
      angleMode(DEGREES);
      rectMode(CENTER);

      translate(this.x, this.y);
      rotate(this.rotate);
      fill(doorInGlow);
      stroke(doorStGlow);
      // rect(0, 0, this.width, this.length, 2);
      image(doorOut, 0, 0, this.width, this.length);
      pop();
    }
  }

  drawIn() {
    if (this.show) {
      push();
      angleMode(DEGREES);
      rectMode(CENTER);

      translate(this.x, this.y);
      rotate(this.rotateIn);
      stroke(200);
      // rect(0, 0, this.width, this.length, 2);
      image(doorIn, 0, 0, this.width, this.length);
      pop();
    }
  }

  checkSceneOut() {
    if (sceneNum == 0) {
      this.show = false;
    } else if (sceneNum == 1) {
      this.show = true;
      this.rotate = 0;
      this.x = width - this.width / 2;
      this.y = height / 2;
    } else if (sceneNum == 2) {
      this.x = this.width / 2;
      this.y = 300;
      this.rotate = 180;
    } else if (sceneNum == 3) {
      this.rotate = 0;
      this.x = width - this.width / 2;
      this.y = 360;
    } else if (sceneNum == 4) {
      this.x = 430 - this.width / 2;
      this.y = 330;
    } else if (sceneNum == 5) {
      this.x = 50 + this.width / 2;
      this.y = 250;
      this.rotate = 180;
    } else if (sceneNum == 6) {
      this.rotate = 90;
      this.x = width / 2 + 2;
      this.y = 130 + this.width / 2;
      this.rotate = 270;
    } else if (sceneNum == 7) {
      this.rotate = 180;
      this.x = 70 + this.width * 0.5;
      this.y = 300;
    } else if (sceneNum == 8) {
      this.rotate = 90;
      this.x = width / 3;
      this.y = height - this.width / 2;
    } else if (sceneNum == 9) {
      this.rotate = 90;
      this.show = false;
    } else if (sceneNum == 10) {
      this.rotate = 90;
      this.show = false;
    }
  }

  checkSceneIn() {
    if (sceneNum == 0) {
      this.show = false;
      this.rotateIn = 180;
    } else if (sceneNum == 1) {
      this.show = false;
    } else if (sceneNum == 2) {
      this.x = width - this.width / 2;
      this.y = 300;
    } else if (sceneNum == 3) {
      this.rotateIn = 90;
      this.x = 150;
      this.y = height - this.width / 2;
    } else if (sceneNum == 4) {
      this.x = 550 - this.width / 2;
      this.y = 240;
    } else if (sceneNum == 5) {
      this.x = 550 - this.width / 2;
      this.y = 360;
    } else if (sceneNum == 6) {
      this.rotateIn = 90;
      this.x = 310;
      this.y = 370 - this.width / 2;
    } else if (sceneNum == 7) {
      this.rotateIn = 270;
      this.x = 485;
      this.y = 110 + this.width / 2;
    } else if (sceneNum == 8) {
      this.rotateIn = 90;
      this.x = (width / 3) * 2;
      this.y = height - this.width / 2;
    } else if (sceneNum == 9) {
      this.rotateIn = 90;
      this.show = false;
    } else if (sceneNum == 10) {
      this.rotateIn = 90;
      this.show = false;
    }
  }

  charInX() {
    this.checkSceneIn();
    let inX;

    if (this.x > width / 2) {
      inX = this.x - this.charCom;
    } else if (this.x <= width / 2) {
      inX = this.x + this.charCom;
    }

    if (this.rotate === 90) {
      if (this.x > width / 2) {
        inX += this.charCom;
      } else if (this.x <= width / 2) {
        inX -= this.charCom;
      }
    }

    //for some reason I need to do this compensation???????
    if (sceneNum == 0) {
      inX -= this.charCom;
    } else if (sceneNum == 1) {
      inX -= 300;
    }

    return inX;
  }

  charInY() {
    this.checkSceneIn();
    let inY;

    if (sceneNum == 0) {
      inY = height / 2;
    } else if (sceneNum == 1) {
      inY = height / 2;
    } else {
      if (this.y > height / 2) {
        inY = this.y - this.charCom;
      } else if (this.y <= height / 2) {
        inY = this.y + this.charCom;
      }
      if (this.rotate === 0) {
        if (this.y > width / 2) {
          inY += this.charCom;
        } else if (this.y <= width / 2) {
          inY -= this.charCom;
        }
      }
    }

    if (sceneNum == 9) {
      inY -= this.charCom;
    }

    if (sceneNum == 2) { //I dont know why I have to add this.. but I dont care, as long as it works, screw it >:[
      inY += 100;
    }

    if (sceneNum == 4) {
      inY += 100;
    }

    return inY;
  }


  charOutX() {
    this.checkSceneOut();
    let outX;

    outX = this.x;

    return outX;
  }

  charOutY() {
    this.checkSceneOut();
    let outY;

    outY = this.y;

    return outY;
  }

  checkCollide() {
    this.checkSceneOut();
    this.charOutX();
    this.charOutY();

    if (
      dist(charX, charY, this.charOutX(), this.charOutY()) < 50 &&
      this.show
    ) {
      return true;
    } else {
      return false;
    }
  }

  message() {
    if (this.checkCollide() && this.show) {
      hint(`Press [space] to go to [${locationName[sceneNum + 1]}]`);
    }
  }
}
