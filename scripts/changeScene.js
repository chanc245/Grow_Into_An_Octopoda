function sceneConstrain() {
  if (sceneNum == 2) {
    charX = constrain(charX, -5, 605);
    charY = constrain(charY, 200, 405);
  } else if (sceneNum == 3) {
    charX = constrain(charX, -5, 605);
    charY = constrain(charY, 200, 405);
  } else if (sceneNum == 4) {
    charX = constrain(charX, 50 + charW / 2, 550 - charW / 2);
    charY = constrain(charY, 200, 405);
  } else if (sceneNum == 5) {
    charX = constrain(
      charX,
      50 + (charW * imgCom) / 2 + 7,
      550 - (charW * imgCom) / 2 - 7
    );
    charY = constrain(charY, 200, 405);
  } else if (sceneNum == 6) {
    charX = constrain(charX, -5, 605);
    charY = constrain(charY, 115, 405);
  } else if (sceneNum == 7) {
    charX = constrain(charX, 70 + charW / 2, 520 - charW / 2);
    charY = constrain(charY, 110, 405);
  } else if (sceneNum == 9) {
    charX = constrain(charX, -5 + charW / 2, 605 - charW / 2);
    charY = constrain(charY, -5 + charH / 2, 405 - charH / 2);
  } else {
    charX = constrain(charX, -5, 605);
    charY = constrain(charY, -5, 405);
    // charY = constrain(charY, 200, 405); // half of the room
  }
}

function changeSceneSwitch() {
  charX = door.charInX();
  charY = door.charInY();

  showThisIcon = true;
  showItemIcon = true;
  showItemText = false;

  doorOpened = false;
  itemCollected = false;

  if (sceneNum == 9) {
    //again, dont know why the value at this scene is weird
    charX = width / 2;
    charY = height / 2;
  }
}

function changeScene() {
  switch (sceneNum) {
    case 0:
      scene0();
      break;

    case 1:
      scene1();
      break;

    case 2:
      scene2();
      break;

    case 3:
      scene3();
      break;

    case 4:
      scene4();
      break;

    case 5:
      scene5();
      break;

    case 6:
      scene6();
      break;

    case 7:
      scene7();
      break;

    case 8:
      scene8();
      break;

    case 9:
      scene9();
      break;

    case 10:
      ending();
      break;
  }

  sceneConstrain();

  if (sceneNum == 0) {
    if (charX > width || charX < 0 || charY > height || charY < 0) {
      sceneNum++;
      changeSceneSwitch();
    }
  }

  if (door.checkCollide()) {
    if (keyIsDown(32)) {
      playDoor();
      sceneNum++;
      changeSceneSwitch();
    }
  }

  if (sceneNum == 9) {
    if (
      charX > width - charW / 2 ||
      charX < 0 + charW / 2 ||
      charY > height - charH / 2 ||
      charY < 0 + charH / 2
    ) {
      hint("press [/] to go to your ending");

      if (key == "/") {
        sceneNum++;
        changeSceneSwitch();
      }
    }
  }
}
