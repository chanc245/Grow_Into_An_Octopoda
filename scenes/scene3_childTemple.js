// outside temple playing area
// BG: plant around, lion x2, entrence of temple, one incense burner, large dragon pond (turtle)
// ITEM: cart (by the pond)
// NPC: sanitor
// IN: bottom (bottom door)
// OUT:  pond door

function scene3() {
  image(scene3_Img, width / 2, height / 2, 1200 * imgCom, 800 * imgCom);

  if (sceneNum == 3) {
    mvS = 4;
  } else {
    mvS = 7;
  }

  openMap();
}
