// art classroom
// BG: tables, whiteboard, shewell's table, artstuff cabine
// ITEM: Art thing (in art room)
// NPC:  Ms. Shlewell, Emily
// IN: Door
// OUT:  window

function scene5() {
  image(scene5_Img, width / 2, height / 2, 1200 * imgCom, 800 * imgCom);

  if (sceneNum == 5) {
    mvS = 5;
  } else {
    mvS = 7;
  }

  openMap();
}
