let charX = 300; //character X -- width/2
let charY = 200; //character Y -- height/2

let charW = 100 * imgCom;
let charH = 150 * imgCom;

let mvS = 7; //moving speed //debug

let itemCollectCount = 0;

let showItemIcon = true;
let showItemText = false;

let showGallary = false;

let returnToMap = false;

let right, left

let itemTrue = [];
let itemFalse = [];

let endingNum = 0

let locationName = [
  "Title",
  "First",
  "Room1",
  "Temple",
  "Room2",
  "Artroom",
  "Kerrey Hall",
  "Dorm",
  "Gallary",
  "Map",
];

let itemName = [
  "Star",
  "Snowy",
  "Cart",
  "Dark Ball",
  "Art Supply",
  "Suitcase",
  "Picture",
];

let Star = false;
let Snowy = false;
let Cart = false;
let DarkBall = false;
let ArtSupply = false;
let Suitcase = false;
let Picture = false;

let itemCollectedOrNot = [
  Star, //1
  Snowy, //2
  Cart, //3
  DarkBall, //4
  ArtSupply, //5
  Suitcase, //6
  Picture, //7
];

let gallaryCaseLocationX = [
  (600 / 5) * 1, //(width / 5) * 1
  (600 / 5) * 2,
  (600 / 5) * 3,
  (600 / 5) * 4,
  (600 / 5) * 1,
  (600 / 4) * 2,
  (600 / 5) * 4,
];

let gallaryCaseLocationY = [
  400 / 3, //height / 3
  400 / 3,
  400 / 3,
  400 / 3,
  (400 / 3) * 2,
  (400 / 3) * 2,
  (400 / 3) * 2,
];

let mapRoomX = [
  (600 / 6) * 1, //(width / 6) * 1
  (600 / 6) * 2,
  (600 / 6) * 3,
  (600 / 6) * 4,
  (600 / 6) * 5,
  (600 / 6) * 1,
  (600 / 6) * 2,
  (600 / 6) * 3,
  (600 / 6) * 4,
  (600 / 6) * 5,
];

let mapRoomY = [
  400 / 4, //height / 4
  400 / 4,
  400 / 4,
  400 / 4,
  400 / 4,
  (400 / 4) * 3 - 30,
  (400 / 4) * 3 - 30,
  (400 / 4) * 3 - 30,
  (400 / 4) * 3 - 30,
  (400 / 4) * 3 - 30,
];

let endingText = [
  "Thank you for helping me collecting\nall her essential memories.......\nNow I can FINIALLY fulfill my purpose...\n:)", //ED1 - 7
  "You are so close! Quick!\nGO BACK AND FIND THAT LAST ONE!\nI NEED THAT LAST ONE!", //ED2 - 6
  "You've done half of it!\n come on!\nDon't you want to know more?", //ED3 - 4-5
  "Please try harder! Come on!\nWe can do it!", //ED4 - 2-3
  "...are you even trying?\n why are you here??", //ED5 - 0-1
];
