function loadClasses() {
  door = new Door();
  item = new Item();
  chara = new Chara();
}

function hint(textInput) {
  push();

  fill(230);
  stroke(220);
  strokeWeight(5)
  rect(width / 2, 50, width / 2 + 70, 50);

  textSize(15);
  textFont(hintFont);
  fill(100);
  noStroke()
  text(textInput, width / 2, 55);

  pop();
}

function hintLong(textInput) {
  push();

  fill(230);
  stroke(220);
  strokeWeight(5)
  rect(width / 2, 50, width / 2 + 250, 50);

  textSize(15);
  textFont(hintFont);
  fill(100);
  noStroke()
  text(textInput, width / 2, 55);

  pop();
}

function instruction(textInput) {
  push();

  fill(240);
  stroke(220);
  strokeWeight(5)
  rect(width / 2, 300, width / 2 + 50, 50);

  textSize(15);
  textFont(hintFont);
  fill(150);
  noStroke()
  text(textInput, width / 2, 305);

  pop();
}

function itemTextBox(itemType, textInput1) {
  push();

  fill(230);
  stroke(220);
  strokeWeight(5)

  rect(width / 2, 325, 400, width / 6); //text box

  fill(230);
  rect(width / 2, height / 2, 100, 100); //item box

  fill(100);

  let imgWH = 120 * imgCom;
  // image box
  if (itemType == itemName[0]) {
    image(item0, width / 2, height / 2 - 7, imgWH, imgWH);
  } else if (itemType == itemName[1]) {
    image(item1, width / 2, height / 2 - 7, imgWH, imgWH);
  } else if (itemType == itemName[2]) {
    image(item2, width / 2, height / 2 - 7, imgWH, imgWH);
  } else if (itemType == itemName[3]) {
    image(item3, width / 2, height / 2 - 7, imgWH, imgWH);
  } else if (itemType == itemName[4]) {
    image(item4, width / 2, height / 2 - 7, imgWH, imgWH);
  } else if (itemType == itemName[5]) {
    image(item5, width / 2, height / 2 - 7, imgWH, imgWH);
  } else if (itemType == itemName[6]) {
    image(item6, width / 2, height / 2 - 7, imgWH, imgWH);
  }

  textSize(15);
  textFont(txtFont);
  fill(100);
  noStroke()
  text(itemType, width / 2, height / 2 + 43);

  // textAlign(LEFT);
  text(textInput1, width / 2, 302);

  pop();
}

function mapInstruction(textInput) {
  push();

  fill(250, 250, 250);
  stroke(220);
  strokeWeight(5)
  rect(width / 2, height / 2, 400, 40);

  textSize(15);
  textFont(hintFont);
  fill(100, 100, 100, 100);
  noStroke()
  text(textInput, width / 2, height / 2 + 5);

  pop();
}

function edge(x, y, width, length) {
  //calculate edge of shape
  let edgeNum = [];

  edgeNumLeft = x - width / 2; //left bound
  edgeNumRight = x + width / 2; //right bound
  edgeNum.push(edgeNumLeft);
  edgeNum.push(edgeNumRight);

  edgeNumUp = y - length / 2;
  edgeNumDown = y + length / 2;
  edgeNum.push(edgeNumUp);
  edgeNum.push(edgeNumDown);

  //edgeNum(xLeft, xRight, yUP, yDOWN)
  //edge(x, y, width, length) = (xLeft, xRight, yUP, yDOWN)
  return edgeNum;
}

function ItemCase() {
  push();

  let imgW = 120 * imgCom;
  let imgL = 170 * imgCom;
  let imgSize = 120 * imgCom * 0.7;

  image(
    item0_gal_Img,
    gallaryCaseLocationX[0],
    gallaryCaseLocationY[0],
    imgW,
    imgL
  );
  image(
    item1_gal_Img,
    gallaryCaseLocationX[1],
    gallaryCaseLocationY[1],
    imgW,
    imgL
  );
  image(
    item2_gal_Img,
    gallaryCaseLocationX[2],
    gallaryCaseLocationY[2],
    imgW,
    imgL
  );
  image(
    item3_gal_Img,
    gallaryCaseLocationX[3],
    gallaryCaseLocationY[3],
    imgW,
    imgL
  );
  image(
    item4_gal_Img,
    gallaryCaseLocationX[4],
    gallaryCaseLocationY[4],
    imgW,
    imgL
  );
  image(
    item5_gal_Img,
    gallaryCaseLocationX[5],
    gallaryCaseLocationY[5],
    imgW,
    imgL
  );
  image(
    item6_gal_Img,
    gallaryCaseLocationX[6],
    gallaryCaseLocationY[6],
    imgW,
    imgL
  );

  pop();
}

function coverItemCase() {
  for (let i = 0; i <= itemCollectedOrNot.length; i++) {
    if (itemCollectedOrNot[i] == false) {
      push();

      fill(200);
      image(
        itemNotShow_gal_Img,
        gallaryCaseLocationX[i],
        gallaryCaseLocationY[i],
        120 * imgCom,
        170 * imgCom
      );

      pop();
    }
  }
}

function locationMapBox() {
  push();

  let mapSizeW = (600 / 4) * imgCom;
  let mapSizeL = (400 / 4) * imgCom;

  let mvDown = 40;
  let mvd = 10

  let mtextBox = 20;

  stroke(100);
  // noStroke()
  fill(255, 255, 255, 0);
  textFont(txtFont);

  for (let i = 0; i <= 9; i++) {
    noStroke()
    // fill(100, 100, 255, 255, 0);
    rect(mapRoomX[i], mapRoomY[i], mapSizeW, mapSizeL); //0
    // stroke(100);
    // fill(255, 255, 255, 255, 255);
    rect(mapRoomX[i], mapRoomY[i] + mvDown, mapSizeW, mtextBox, 5);

    push();
    fill(100);
    noStroke();
    text(locationName[i], mapRoomX[i], mapRoomY[i] + mvDown + 5);
    pop();
  }

  pop();
}

function openMap() {
  if (returnToMap) {
    if (key != interactKey) {
      //   showItemIcon = false;
      // showItemText = true;
      push();
      if (sceneNum == 0 || sceneNum == 1) {
        rect(width / 2, 300, width / 2 + 50, 50, 10);
      }

      if (sceneNum != 9) {
        fill(240, 240, 240, 200);
        stroke(230);
        strokeWeight(5)
        rect(width / 2, 300, width / 2 + 50, 50);

        textSize(15);
        textFont(hintFont);
        fill(100, 100, 100, 200);
        noStroke()
        text("press [m] to go back to [map]", width / 2, 305);
      }
      pop();
    }

    if (key == "m") {
      sceneNum = 9;
    }
  }
}

// scene1_1_Img = loadImage("assets/scenes_img/S1/S1_1.png");
// scene1_2_Img = loadImage("assets/scenes_img/S1/S1_2.png");
// scene1_3_Img = loadImage("assets/scenes_img/S1/S1_3.png");
// scene1_4_Img = loadImage("assets/scenes_img/S1/S1_4.png");
// scene1_5_Img = loadImage("assets/scenes_img/S1/S1_5.png");
// scene1_6_Img = loadImage("assets/scenes_img/S1/S1_6.png");
// scene1_7_Img = loadImage("assets/scenes_img/S1/S1_7.png");

function followCharMap() {
  function calW(input) {
    let output = (600 - input) / 2;
    return output;
  }

  function calH(input) {
    let output = (400 - input) / 2;
    return output;
  }

  let x1 = map(charX, 0, width, 0, 450) + calW(450);
  let x2 = map(charX, 0, width, 0, 400) + calW(400);
  let x3 = map(charX, 0, width, 0, 350) + calW(350);

  let x4 = map(charX, 0, width, 0, 300) + calW(300);
  let x5 = map(charX, 0, width, 0, 250) + calW(250);
  let x6 = map(charX, 0, width, 0, 200) + calW(200);

  let y1 = map(charY, 0, height, 0, 350) + calH(350);
  let y2 = map(charY, 0, height, 0, 300) + calH(300);
  let y3 = map(charY, 0, height, 0, 250) + calH(250);

  let y4 = map(charY, 0, height, 0, 200) + calH(200);
  let y5 = map(charY, 0, height, 0, 150) + calH(150);
  let y6 = map(charY, 0, height, 0, 0) + calH(0);

  image(scene1_7_Img, width / 2, height / 2, 1200 * imgCom, 800 * imgCom);
  image(scene1_6_Img, x6, y6, 1200 * imgCom, 800 * imgCom);
  image(scene1_5_Img, x5, y5, 1200 * imgCom, 800 * imgCom);
  image(scene1_4_Img, x4, y4, 1200 * imgCom, 800 * imgCom);

  image(scene1_3_Img, x3, y3, 1200 * imgCom, 800 * imgCom);
  image(scene1_2_Img, x2, y2, 1200 * imgCom, 800 * imgCom);
  image(scene1_1_Img, x1, y1, 1200 * imgCom, 800 * imgCom);

}

function playSongs() {
  if (sceneNum === 0) {
    if (!song1HasPlayed) {
      bgMusic.loop();
      song1HasPlayed = true;
    } else {
      song1HasPlayed = true;
    }
  }
}

function playCollect() {
  if (!itemCollected) {
    collectSE.play();
    itemCollected = true;
  } else {
    itemCollected = true;
  }
}

function playDoor() {
  if (!doorOpened) {
    openSE.play();
    doorOpened = true;
  } else {
    doorOpened = true;
  }
}

// let doorOpened = false;
// let itemCollected = false;
