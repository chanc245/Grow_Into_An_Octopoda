function preload() {
  //audio
  soundFormats('ogg', 'mp3')
  bgMusic = loadSound("assets/audio/Big Helmet_Pix.mp3");
  openSE = loadSound("assets/audio/openDoor.mp3");
  collectSE = loadSound("assets/audio/collect.mp3");

  //char
  char_stg1 = loadImage("assets/character_img/char_stg1.gif");
  char_stg2R = loadImage("assets/character_img/char_stg2R.gif");
  char_stg2L = loadImage("assets/character_img/char_stg2L.gif");
  char_stg3R = loadImage("assets/character_img/char_stg3R.gif");
  char_stg3L = loadImage("assets/character_img/char_stg3L.gif");
  char_stg4R = loadImage("assets/character_img/char_stg4R.gif");
  char_stg4L = loadImage("assets/character_img/char_stg4L.gif");
  char_stg5R = loadImage("assets/character_img/char_stg5R.gif");
  char_stg5L = loadImage("assets/character_img/char_stg5L.gif");

  //door
  doorOut = loadImage("assets/door_img/doorOut.gif");
  doorIn = loadImage("assets/door_img/doorIn.png");

  //font
  titleFont = loadFont("assets/font/BULKYPIX.TTF");
  txtFont = loadFont("assets/font/Hardpixel.OTF");
  hintFont = loadFont("assets/font/half_bold_pixel-7.ttf");

  //scene images 
  scene0_Img = loadImage("assets/scenes_img/S0.png");
  scene2_Img = loadImage("assets/scenes_img/S2.png");
  scene3_Img = loadImage("assets/scenes_img/S3.png");
  scene4_Img = loadImage("assets/scenes_img/S4.png");
  scene5_Img = loadImage("assets/scenes_img/S5.png");
  scene6_Img = loadImage("assets/scenes_img/S6.png");
  scene7_Img = loadImage("assets/scenes_img/S7.png");

  scene9_Img = loadImage("assets/scenes_img/S9.png");

  //scene 1 images
  scene1_1_Img = loadImage("assets/scenes_img/S1/S1_1.png");
  scene1_2_Img = loadImage("assets/scenes_img/S1/S1_2.png");
  scene1_3_Img = loadImage("assets/scenes_img/S1/S1_3.png");
  scene1_4_Img = loadImage("assets/scenes_img/S1/S1_4.png");
  scene1_5_Img = loadImage("assets/scenes_img/S1/S1_5.png");
  scene1_6_Img = loadImage("assets/scenes_img/S1/S1_6.png");
  scene1_7_Img = loadImage("assets/scenes_img/S1/S1_7.png");

  //item image
  item0 = loadImage("assets/item_img/star.png");
  item1 = loadImage("assets/item_img/snowy.png");
  item2 = loadImage("assets/item_img/cart.png");
  item3 = loadImage("assets/item_img/darkball.png");
  item4 = loadImage("assets/item_img/artsupply.png");
  item5 = loadImage("assets/item_img/suitcase.png");
  item6 = loadImage("assets/item_img/picture.png");

  itemStar = loadImage("assets/item_img/itemStar.gif");

  //gallary case image
  item0_gal_Img = loadImage("assets/gallary_case_img/star_gal.png"); //star
  item1_gal_Img = loadImage("assets/gallary_case_img/snowy_gal.png"); //snowy
  item2_gal_Img = loadImage("assets/gallary_case_img/cart_gal.png"); //cart
  item3_gal_Img = loadImage("assets/gallary_case_img/darkball_gal.png"); //dark ball
  item4_gal_Img = loadImage("assets/gallary_case_img/artsupply_gal.png"); //art supply
  item5_gal_Img = loadImage("assets/gallary_case_img/suitcase_gal.png"); //suitcase
  item6_gal_Img = loadImage("assets/gallary_case_img/picture_gal.png"); //picture
  itemNotShow_gal_Img = loadImage("assets/gallary_case_img/notcollect_gal.png");
}

function setup() {
  createCanvas(600, 400);

  rectMode(CENTER);
  ellipseMode(CENTER);

  textAlign(CENTER);

  // strokeWeight(10)

  imageMode(CENTER);

  getAudioContext().suspend(); //sound 
}

function draw() {
  background(220);

  loadClasses();

  changeScene();

  allDebugFunction();

  chara.all();
  door.inNout();
  item.all();

  playSongs();
}

function mousePressed() {
  showXY();

  userStartAudio();
}
