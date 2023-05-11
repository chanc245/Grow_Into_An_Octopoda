// with all the miniture room art
// BG: a changing gradient (base on where's the player)
// ITEM:
// NPC:  standing by the items?  (standing randomly?)
// IN: center of map
// OUT:  after exiting gallary --> press M on key board

function scene9() {
  image(scene9_Img, width / 2, height / 2, 1200 * imgCom, 800 * imgCom);

  returnToMap = true;

  openMap();

  locationMapBox();

  mapInstruction("retrun to map function has been enabled");

  if (dist(charX, charY, mapRoomX[0], mapRoomY[0]) < 50) {
    mapInstruction(`Press [space] to go to [${locationName[0]}]`);
    if (key == " ") {
      sceneNum = 0;
    }
  } else if (dist(charX, charY, mapRoomX[1], mapRoomY[1]) < 50) {
    mapInstruction(`Press [space] to go to [${locationName[1]}]`);
    if (key == " ") {
      sceneNum = 1;
    }
  } else if (dist(charX, charY, mapRoomX[2], mapRoomY[2]) < 50) {
    mapInstruction(`Press [space] to go to [${locationName[2]}]`);
    if (key == " ") {
      sceneNum = 2;
    }
  } else if (dist(charX, charY, mapRoomX[3], mapRoomY[4]) < 50) {
    mapInstruction(`Press [space] to go to [${locationName[3]}]`);
    if (key == " ") {
      sceneNum = 3;
    }
  } else if (dist(charX, charY, mapRoomX[4], mapRoomY[4]) < 50) {
    mapInstruction(`Press [space] to go to [${locationName[4]}]`);
    if (key == " ") {
      sceneNum = 4;
    }
  } else if (dist(charX, charY, mapRoomX[5], mapRoomY[5]) < 50) {
    mapInstruction(`Press [space] to go to [${locationName[5]}]`);
    if (key == " ") {
      sceneNum = 5;
    }
  } else if (dist(charX, charY, mapRoomX[6], mapRoomY[6]) < 50) {
    mapInstruction(`Press [space] to go to [${locationName[6]}]`);
    if (key == " ") {
      sceneNum = 6;
    }
  } else if (dist(charX, charY, mapRoomX[7], mapRoomY[7]) < 50) {
    mapInstruction(`Press [space] to go to [${locationName[7]}]`);
    if (key == " ") {
      sceneNum = 7;
    }
  } else if (dist(charX, charY, mapRoomX[8], mapRoomY[8]) < 50) {
    mapInstruction(`Press [space] to go to [${locationName[8]}]`);
    if (key == " ") {
      sceneNum = 8;
    }
  } else if (dist(charX, charY, mapRoomX[9], mapRoomY[9]) < 50) {
    mapInstruction(`Press [space] to go to [${locationName[9]}]`);
    if (key == " ") {
      sceneNum = 9;
    }
  }
}
