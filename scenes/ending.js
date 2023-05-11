function ending() {
  //endingText
  push();
  noStroke();
  fill(100);
  rect(600 / 2, 400 / 2, 600, 400);

  fill(200);
  textFont(titleFont)
  textSize(20);
  textLeading(30);
  if (endingNum === 1) {
    text(endingText[4], 600 / 2, 150);
  } else if (endingNum === 2) {
    text(endingText[3], 600 / 2, 150);
  } else if (endingNum === 3) {
    text(endingText[2], 600 / 2, 150);
  } else if (endingNum === 4) {
    text(endingText[1], 600 / 2, 150);
  } else if (endingNum === 5) {
    text(endingText[0], 600 / 2, 150);

    // textSize(10);
    // textLeading(10);
    // text(`and it's non of your business now\n you don't have to know what my\n"purpose" is, so just leave ;)`, 600 / 2, 275);
  }

  hint(`Press [space] to go back to [${locationName[8]}]`);
  if (key == " ") {
    sceneNum = 8;
  }

  pop();
}
