class Chara {
  constructor() {
    this.width = 100 * imgCom;
    this.height = 150 * imgCom;
    this.stage = 0;

    this.itemTrueCount = 0;
  }

  all() {
    this.draw();
  }

  draw() {
    this.drawStage(); //draw character

    if (keyIsDown(RIGHT_ARROW)) {
      charX += mvS;
      this.right = true;
      this.left = false;
    } else if (keyIsDown(LEFT_ARROW)) {
      charX -= mvS;
      this.right = false;
      this.left = true;
    }

    if (keyIsDown(UP_ARROW)) {
      charY -= mvS;
    } else if (keyIsDown(DOWN_ARROW)) {
      charY += mvS;
    }
  }

  checkSceneSrink() {
    if (sceneNum == 3) {
      sceneSrink = 0.6;
    } else if (sceneNum == 5) {
      sceneSrink = 0.7;
    } else if (sceneNum == 7) {
      sceneSrink = 0.8;
    } else {
      sceneSrink = 1;
    }
  }

  checkLeftRight() {
    if (keyIsDown(RIGHT_ARROW)) {
      right = true;
      left = false;
    } else if (keyIsDown(LEFT_ARROW)) {
      right = false;
      left = true;
    }
  }

  drawImgSize(stage) {
    this.checkSceneSrink();
    this.checkLeftRight();

    push();
    stroke(220);
    fill(255, 255, 255, 90);
    // rect(charX, charY, this.width * sceneSrink, this.height * sceneSrink);

    tint(255, 130);

    if (stage == 1) {
      image(
        char_stg1,
        charX,
        charY,
        this.width * sceneSrink,
        this.height * sceneSrink
      );
    } else if (stage == 2) {
      if (right == true) {
        image(
          char_stg2R,
          charX,
          charY,
          this.width * sceneSrink,
          this.height * sceneSrink
        );
      } else if (left == true) {
        image(
          char_stg2L,
          charX,
          charY,
          this.width * sceneSrink,
          this.height * sceneSrink
        );
      }
    } else if (stage == 3) {
      if (right == true) {
        image(
          char_stg3R,
          charX,
          charY,
          this.width * sceneSrink,
          this.height * sceneSrink
        );
      } else if (left == true) {
        image(
          char_stg3L,
          charX,
          charY,
          this.width * sceneSrink,
          this.height * sceneSrink
        );
      }
    } else if (stage == 4) {
      if (right == true) {
        image(
          char_stg4R,
          charX,
          charY,
          this.width * sceneSrink,
          this.height * sceneSrink
        );
      } else if (left == true) {
        image(
          char_stg4L,
          charX,
          charY,
          this.width * sceneSrink,
          this.height * sceneSrink
        );
      }
    } else if (stage == 5) {
      if (right == true) {
        image(
          char_stg5R,
          charX,
          charY,
          this.width * sceneSrink,
          this.height * sceneSrink
        );
      } else if (left == true) {
        image(
          char_stg5L,
          charX,
          charY,
          this.width * sceneSrink,
          this.height * sceneSrink
        );
      }
    }

    noStroke();
    fill(100);
    // text(`${stage}`, charX, charY + 5);
    pop();
  }

  drawStage() {
    if (this.checkStage() === 0 || this.checkStage() === 1) {
      // console.log("stage 1")
      this.stage = 1;
      endingNum = 1;
    } else if (this.checkStage() === 2 || this.checkStage() === 3) {
      // console.log("stage 2")
      this.stage = 2;
      endingNum = 2;
    } else if (this.checkStage() === 4 || this.checkStage() === 5) {
      // console.log("stage 3")
      this.stage = 3;
      endingNum = 3;
    } else if (this.checkStage() === 6) {
      // console.log("stage 4")
      this.stage = 4;
      endingNum = 4;
    } else if (this.checkStage() >= 7) {
      // console.log("stage 5")
      this.stage = 5;
      endingNum = 5;
    }

    return this.drawImgSize(this.stage);
  }

  checkStage() {
    this.itemTrueCount = 0;
    for (let i = 0; i < itemCollectedOrNot.length; i++) {
      if (itemCollectedOrNot[i] === true) {
        this.itemTrueCount += 1;
      }
    }

    return this.itemTrueCount;
  }

  edge() {
    return edge(charX, charY, this.width, this.height);
  }
}
