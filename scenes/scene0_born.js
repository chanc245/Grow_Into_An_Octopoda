// Born, title
// BG: all white, with title (TBD), instruciton of arrows
// ITEM: --
// NPC: --
// IN: --
// OUT: all direction

function scene0() {
  background(245);
  image(scene0_Img, width / 2, height / 2, 1200 * imgCom, 800 * imgCom);

  push();

  textSize(30);
  textLeading(10)
  textFont(titleFont)
  fill(80);
  text("Grow Into An Octopoda", width / 2, 125);

  // instruction("- Press ↑ ↓ → ← to move around -");
  instruction("Press [arrow keys] to move around");

  pop();

  openMap();
}
