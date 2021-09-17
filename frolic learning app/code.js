setScreen("mainScreen");
onEvent("playButton", "click", function(event) {
  setScreen("playScreen");
});
onEvent("sliderLength", "change", function(event) {
  for (var z = 1; z < getNumber("sliderLength"); z++) {
    penUp();
    moveTo(155, 250);
    penDown();
    penRGB(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255));
    penWidth(1);
    moveForward(z);
    turnRight(1);
    hide();
  }
});
onEvent("studyButton", "click", function(event) {
  setScreen("studyScreen");
});
onEvent("GenerateButton", "click", function(event) {
  for (var i = 1; i < 11; i++) {
    textLabel(i, (((getText("tableNumberInput") + " X ") + i) + "=") + i * getNumber("tableNumberInput"));
    setPosition(i, 100, 40*i, 200, 100);
  }
  hideElement("tableNumberInput");
  hideElement("GenerateButton");
});
