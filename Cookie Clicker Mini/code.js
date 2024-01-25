// Main Variables
var numC = 0;
var cookiesPerSecond = 0;
var clickRatio = 1;

var milk1X = 0;
var milk2X = 0;
var milk3X = 0;

var degRatio = 0;

// Upgrade Variables
var numClick = 0;
var clickPrice = 15;

var numGrandma = 0;
var grandmaPrice = 100;

var numFarm = 0;
var farmPrice = 1100;

var numMine = 0;
var minePrice = 12000;

var numFactory = 0;
var factoryPrice = 130000;

var numBank = 0;
var bankPrice = 1400000;

var numTemple = 0;
var templePrice = 20000000;

// Cookies Per Sec Logic
timedLoop(100, function() {
  cookiesPerSecond = (numClick * 0.1) + (numGrandma * 1) + (numFarm * 8) + (numMine * 47) + (numFactory * 260) + (numBank * 1400) + (numTemple * 7800);
  clickRatio = numClick + numGrandma + numFarm + numMine + numFactory + numBank + numTemple + 1;
  setText("numC", Math.round(numC) + " Cookies (" + (Math.round(cookiesPerSecond * 10) / 10) + " Per Sec.)");
  setText("clickText", numClick + " Clicks Per Second + " + clickRatio + " Clicks per Click");
});

// Add Cookies Per Second
timedLoop(1000, function() {
  numC += cookiesPerSecond;
});

onEvent("cookie", "click", function( ) {
  numC += clickRatio;
});

// Calculate Price
timedLoop(100, function() {
  if (numClick < 36 && (numClick > 0 || numC >= (15 * 0.6))) {
    setText("clickB", clickPrice + "");
    setImageURL("clickU", "assets/Cursor_64px.png");
    setProperty("clickText", "hidden", false);
  }
  if (numClick > 35) {
    setText("clickB", "Max");
  }
  
  if (numGrandma < 36 && (numGrandma > 0 || numC >= (100 * 0.6))) {
    setText("grandmaB", grandmaPrice + "");
    setImageURL("grandmaU", "assets/Grandma.png");
  }
  if (numGrandma > 35) {
    setText("grandmaB", "Max");
  }
  
  if (numFarm < 18 && (numFarm > 0 || numC >= (1100 * 0.6))) {
    setText("farmB", farmPrice + "");
    setImageURL("farmU", "assets/Farm.png");
  }
  if (numFarm > 17) {
    setText("farmB", "Max");
  }
  
  if (numMine < 16 && (numMine > 0 || numC >= (12000 * 0.6))) {
    setText("mineB", minePrice + "");
    setImageURL("mineU", "assets/Mine.png");
  }
  if (numMine > 15) {
    setText("mineB", "Max");
  }
  
  if (numFactory < 6 && (numFactory > 0 || numC >= (130000 * 0.6))) {
    setText("factoryB", factoryPrice + "");
    setImageURL("factoryU", "assets/Factory.png");
  }
  if (numFactory > 5) {
    setText("factoryB", "Max");
  }
  
  if (numBank < 5 && (numBank > 0 || numC >= (1400000 * 0.6))) {
    setText("bankB", bankPrice + "");
    setImageURL("bankU", "assets/Bank.png");
  }
  if (numBank > 4) {
    setText("bankB", "Max");
  }
  
  if (numTemple < 5 && (numTemple > 0 || numC >= (20000000 * 0.6))) {
    setText("templeB", templePrice + "");
    setImageURL("templeU", "assets/Temple.png");
  }
  if (numTemple > 3) {
    setText("templeB", "Max");
  }
});

// Show Upgrades
function createClick() {
  setScreen("screen1");
  image("click" + numClick, "assets/Cursor_64px.png");
  setScreen("screen2");
}
timedLoop(10, function() {
  for (var i = 1; i <= numClick; i++) {
    var deg = Math.PI * (i * 50 + degRatio) / 900;
    setPosition("click" + i, 136 + 85 * Math.sin(deg), 182.5 + 85 * Math.cos(deg), 50, 50);
    setStyle("click" + i, "transform: rotate(" + -(degRatio + (i * 50)) / 5 + "deg);");
  }
  degRatio++;
});

function createGrandma() {
  image("grandma" + numGrandma, "assets/Grandma.png");
  if (numGrandma > 18) {
    setPosition("grandma" + numGrandma, (numGrandma - 18) * 10 + 100, 110, 25, 25);
  }
  else {
    setPosition("grandma" + numGrandma, numGrandma * 10 + 100, 89, 25, 25);
  }
}
function createFarm() {
  image("farm" + numFarm, "assets/Farm.png");
  if (numFarm > 9) {
    setPosition("farm" + numFarm, (numFarm - 9) * 21 + 93, 173, 20, 20);
  }
  else {
    setPosition("farm" + numFarm, numFarm * 21 + 93, 150, 20, 20);
  }
}
function createMine() {
  image("mine" + numMine, "assets/Mine.png");
  if (numMine > 8) {
    setPosition("mine" + numMine, (numMine - 8) * 25 + 85, 233, 25, 25);
  }
  else {
    setPosition("mine" + numMine, numMine * 25 + 85, 210, 25, 25);
  }
}
function createFactory() {
  image("factory" + numFactory, "assets/Factory.png");
  setPosition("factory" + numFactory, numFactory * 30 + 85, 275, 35, 35);
}
function createBank() {
  image("bank" + numBank, "assets/Bank.png");
  setPosition("bank" + numBank, numBank * 40 + 70, 334, 40, 40);
}
function createTemple() {
  image("temple" + numTemple, "assets/Temple.png");
  setPosition("temple" + numTemple, numTemple * 45 + 74, 390, 45, 45);
}

// Change Price
onEvent("clickB", "click", function( ) {
  if (numClick < 36 && numC >= clickPrice) {
    numC -= clickPrice;
    numClick += 1;
    clickPrice = Math.round(15 * Math.pow(1.15, numClick));
    createClick();
  }
});
onEvent("grandmaB", "click", function( ) {
  if (numGrandma < 36 && numC >= grandmaPrice) {
    numC -= grandmaPrice;
    numGrandma += 1;
    grandmaPrice = Math.round(100 * Math.pow(1.15, numGrandma));
    createGrandma();
  }
});
onEvent("farmB", "click", function( ) {
  if (numFarm < 18 && numC >= farmPrice) {
    numC -= farmPrice;
    numFarm += 1;
    farmPrice = Math.round(1100 * Math.pow(1.15, numFarm));
    createFarm();
  }
});
onEvent("mineB", "click", function( ) {
  if (numMine < 16 && numC >= minePrice) {
    numC -= minePrice;
    numMine += 1;
    minePrice = Math.round(12000 * Math.pow(1.15, numMine));
    createMine();
  }
});
onEvent("factoryB", "click", function( ) {
  if (numFactory < 6 && numC >= factoryPrice) {
    numC -= factoryPrice;
    numFactory += 1;
    factoryPrice = Math.round(130000 * Math.pow(1.15, numFactory));
    createFactory();
  }
});
onEvent("bankB", "click", function( ) {
  if (numBank < 5 && numC >= bankPrice) {
    numC -= bankPrice;
    numBank += 1;
    bankPrice = Math.round(1400000 * Math.pow(1.15, numBank));
    createBank();
  }
});
onEvent("templeB", "click", function( ) {
  if (numTemple < 4 && numC >= templePrice) {
    numC -= templePrice;
    numTemple += 1;
    templePrice = Math.round(20000000 * Math.pow(1.15, numTemple));
    createTemple();
  }
});

// Cookie Movement
onEvent("cookie", "mousedown", function( ) {
  setProperty("cookie", "width", 130);
  setProperty("cookie", "height", 135);
  setProperty("cookie", "x", 95);
  setProperty("cookie", "y", 140);
});

onEvent("cookie", "mouseup", function( ) {
  setProperty("cookie", "width", 150);
  setProperty("cookie", "height", 155);
  setProperty("cookie", "x", 85);
  setProperty("cookie", "y", 130);
});

onEvent("cookie", "mouseover", function( ) {
  setProperty("cookie", "width", 150);
  setProperty("cookie", "height", 155);
  setProperty("cookie", "x", 85);
  setProperty("cookie", "y", 130);
});

onEvent("cookie", "mouseout", function( ) {
  setProperty("cookie", "width", 140);
  setProperty("cookie", "height", 145);
  setProperty("cookie", "x", 90);
  setProperty("cookie", "y", 135);
});

// Milk Movement
timedLoop(100, function() {
  if (getXPosition("milk1") >= 320) {
    setProperty("milk1", "x", -165);
  }
  if (getXPosition("milk2") >= 320) {
    setProperty("milk2", "x", -165);
  }
  if (getXPosition("milk3") >= 320) {
    setProperty("milk3", "x", -165);
  }
  
  setProperty("milk1", "x", getXPosition("milk1") + 2);
  setProperty("milk2", "x", getXPosition("milk2") + 2);
  setProperty("milk3", "x", getXPosition("milk3") + 2);
});

// Screen Change to Upgrades
onEvent("upgrades", "click", function( ) {
  milk1X = getXPosition("milk1");
  milk2X = getXPosition("milk2");
  milk3X = getXPosition("milk3");
  
 setScreen("screen2");
});

// Screen Change to Main
onEvent("goBack", "click", function( ) {
  setScreen("screen1");
  
  setProperty("milk1", "x", milk1X);
  setProperty("milk2", "x", milk2X);
  setProperty("milk3", "x", milk3X);
});
