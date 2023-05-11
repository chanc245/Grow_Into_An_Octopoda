// Bron tutorial
// BG: very light gradient (more colorful when going to right --> white to color)
// ITEM: a start (starting memory)
// NPC: --
// IN: depend where did the player exit from scene0
// OUT: right

function scene1() {
  followCharMap()

  if (!itemCollectedOrNot[sceneNum - 1]) {
    instruction("Try to pick up the item");
  } else if (itemCollectedOrNot[sceneNum - 1]) {
    instruction("Try to interact with the door");
  }

  openMap();
}
