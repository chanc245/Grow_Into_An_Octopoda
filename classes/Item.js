class Item {
  constructor() {
    this.x = -100;
    this.y = -100;
    this.length = 50 * imgCom;
    this.width = 50 * imgCom;

    this.typeNum = 0;

    this.type = "";
    this.line = "";
    // this.line1 = "line1";
    // this.line2 = "line2";
    // this.line3 = "line3";

    this.showIcon = true;
    this.showPic = false;
    this.showText = false;

    this.showGallaryText = true;

    this.key = interactKey;
  }

  all() {
    this.collideUpdate();

    this.checkScene();
    this.drawIcon();

    this.checkCollide();
    this.hint();
    this.text();
  }

  drawIcon() {
    if (!itemCollectedOrNot[sceneNum - 1]) {
      if (this.showIcon && showItemIcon) {
        push();
        angleMode(DEGREES);
        rectMode(CENTER);

        stroke(200);
        fill(255, 255, 255, 230);
        translate(this.x, this.y);
        rotate(45);
        // rect(0, 0, this.length, this.width, 5);
        image(itemStar, 0, 0, this.length, this.width);
        //itemStar
        pop();
      }
    }
  }

  checkScene() {
    if (sceneNum == 0) {
      this.showIcon = false;
      this.type = "-";
    } else if (sceneNum == 1 || this.typeNum == 1) {
      //S1 - star

      this.x = width / 2;
      this.y = height / 2;

      this.type = itemName[0];
      this.line =
        "Hey! You have collected something! I say we\nmade a pretty good team! You can control me\naround to collect the memory and I can explain\nthem to you! Let's go! This way --->";

      //
    } else if (sceneNum == 2 || this.typeNum == 2) {
      //S2 - snowy

      this.x = 160;
      this.y = 170;

      this.type = itemName[1];
      this.line = "This is a rabbit toy that she has had since her\nbirth, she always talks to it in her childhood\nbed. She cherishes this toy very much. She\nfeels warm every time she sees this toy.";

      //
    } else if (sceneNum == 3 || this.typeNum == 3) {
      //S3 - cart

      this.x = 500;
      this.y = 360;

      this.type = itemName[2];
      this.line = "This is a temple right at the side of her\nchildhood room, she and her brother always\nrid a cart around this temple. This is a happy\nand fun memory of her and her brother.";

      //
    } else if (sceneNum == 4 || this.typeNum == 4) {
      //S4 - darkball

      this.x = 155;
      this.y = 380;

      this.type = itemName[3];
      this.line = "This is her new home, during high school,\nI can feel everything was a huge mess for\nher.... \nInteresting....Let's go to the next room.";

      //
    } else if (sceneNum == 5 || this.typeNum == 5) {
      //S5 - art supply

      this.x = 355;
      this.y = 318;

      this.type = itemName[4];
      this.line = "This is her high school artroom, and her\nfeelings about deciding to pursue art are... quite\nflavourful...hehe.... I can't wait for next\nmemory and the emotions behind it....";

      //
    } else if (sceneNum == 6 || this.typeNum == 6) {
      //S6 - suitcase

      this.x = 395;
      this.y = 180;

      this.type = itemName[5];
      this.line = "This is when she first arrives at Parsons' dorm\nI can feel her feeling anxious, excited, and\nscard. A lot of tasty emotions.. yummy. It's\nthe mixed feelings of having a new start.";

      //
    } else if (sceneNum == 7 || this.typeNum == 7) {
      //S7 - picture

      this.x = 215;
      this.y = 320;

      this.type = itemName[6];
      this.line = "This is a polorid picture of all her roommates\nhappy smelling and having a great time. She\nenjoy her time hanging out with them she\nfeel safe and happy here.";

      //
    } else if (sceneNum == 8) {
      //S8

      this.showIcon = false;

      this.type = "-";

      //
    } else if (sceneNum == 9) {
      //S9

      this.showIcon = false;
      this.type = "-";

      //
    }
  }

  name() {
    this.checkScene();

    let itemName = this.type;

    return itemName;
  }

  checkCollide() {
    this.checkScene();

    if (dist(charX, charY, this.x, this.y) < 40) {
      return true;
    } else {
      return false;
    }
  }

  hint() {
    if (!itemCollectedOrNot[sceneNum - 1]) {
      if (this.checkCollide() && !showItemText) {
        hint(`Press [${this.key}] to pick up the item`);
      }
    }
  }

  hintNotCollected() {
    if (itemCollectedOrNot[this.typeNum - 1] == false) {
      this.showGallaryText = false;
      hintLong(
        `Item not collected, go to [${locationName[this.typeNum]
        }] to collect item`
      );
    } else {
      this.showGallaryText = true;
    }
  }

  collideUpdate() {
    if (!itemCollectedOrNot[sceneNum - 1]) {
      if (this.checkCollide()) {
        if (key == this.key && key != prevKey) {
          showItemIcon = false;
          showItemText = true;
          itemCollectCount += 1;
          playCollect()
        }
        prevKey = key;
      }
    }
  }

  collectUpdate() {
    itemCollectedOrNot[sceneNum - 1] = true;
  }

  text() {
    this.checkScene();
    if (showItemText && key == this.key && this.checkCollide()) {
      if (!showItemIcon) {
        //why !showItemIcon?? but it works so whatever 
        itemTextBox(this.type, this.line);

        hint("Press [any key] to continue");

        this.collectUpdate();
      }
    }
  }

  gallaryText() {
    if (this.showGallaryText) {
      hint(`Press [${this.key}] to interact with item`);
      if (key == this.key) {
        this.checkScene();
        itemTextBox(this.type, this.line);
        hint("Press [any key] to continue");
      }
    }
  }

  gallary() {
    ItemCase(); //item draw out rectengle
    coverItemCase();
    showItemIcon = false;

    let y1 = height / 3;
    let x1 = width / 5;

    if (dist(charX, charY, x1 * 1, y1) < 50) {
      this.typeNum = 1;
      this.hintNotCollected();
      this.gallaryText();
    } else if (dist(charX, charY, x1 * 2, y1) < 50) {
      this.typeNum = 2;
      this.hintNotCollected();
      this.gallaryText();
    } else if (dist(charX, charY, x1 * 3, y1) < 50) {
      this.typeNum = 3;
      this.hintNotCollected();
      this.gallaryText();
    } else if (dist(charX, charY, x1 * 4, y1) < 50) {
      this.typeNum = 4;
      this.hintNotCollected();
      this.gallaryText();
    } else if (dist(charX, charY, x1 * 1, y1 * 2) < 50) {
      this.typeNum = 5;
      this.hintNotCollected();
      this.gallaryText();
    } else if (dist(charX, charY, (width / 4) * 2, y1 * 2) < 50) {
      this.typeNum = 6;
      this.hintNotCollected();
      this.gallaryText();
    } else if (dist(charX, charY, x1 * 4, y1 * 2) < 50) {
      this.typeNum = 7;
      this.hintNotCollected();
      this.gallaryText();
    }
  }
}
