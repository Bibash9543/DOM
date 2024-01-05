var randomNumber1 = Math.random();
//for dice 1
randomNumber1 = Math.floor(randomNumber1*6 +1);
var randomDiceImage = "dice" + randomNumber1 + ".png";
var imageCollection = "images/" + randomDiceImage;
document.querySelectorALL("img")[0].setAttribute("src", imageCollection);

