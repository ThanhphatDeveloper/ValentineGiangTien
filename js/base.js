// Dice Roll

var winCount = 0;
var lossCount = 0;
var gameCount = 0;
var thePoint = 0;

// var cash         = 100;
// var betInput     = document.getElementById('betField').value;
// var bet          = parseInt(betInput);

var elDiceOne = document.getElementById("dice1");

var elComeOut = document.getElementById("comeOutButton");
var elPointRoll = document.getElementById("pointRollButton");
var elWinOrLoss = document.getElementById("winOrLoss");
var elCrapsWins = document.getElementById("crapWins");
var elCrapsLosses = document.getElementById("crapLosses");

elComeOut.onclick = function () {
  comeOutRoll();
};

elPointRoll.onclick = function () {
  pointRoll();
};

// Come Out Roll Function
function comeOutRoll() {
  // Initial dice variables
  var diceOne = Math.floor(Math.random() * 6 + 1);
  var rollTotal = diceOne;

  console.log(rollTotal + " " + diceOne);
  elDiceOne.classList.toggle("animate");

  //Dice reset and display
  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove("show-" + i);
    if (diceOne === i) {
      elDiceOne.classList.add("show-" + i);
    }
  }
  if (rollTotal == 1) {
    setTimeout(() => {
      $popupsCont.classList.add("s--popup-active");
      $popup.classList.add("s--active");
      document.querySelector("#txt-noiDung").innerHTML =
        "Chỉ muốn đánh em ngất. <br/> Vì anh yêu em xĩu 🧡";
    }, 1000);
  }

  if (rollTotal == 2) {
    setTimeout(() => {
      $popupsCont.classList.add("s--popup-active");
      $popup.classList.add("s--active");
      document.querySelector("#txt-noiDung").innerHTML =
        "Muốn bình yên thì lên chùa cầu phúc. <br/> Muốn Valentine hạnh phúc thì đến bên anh.";
    }, 1000);
  }

  if (rollTotal == 3) {
    setTimeout(() => {
      $popupsCont.classList.add("s--popup-active");
      $popup.classList.add("s--active");
      document.querySelector("#txt-noiDung").innerHTML =
        "Chẳng cần Tinder chỉ cần tin em.";
    }, 1000);
  }
  if (rollTotal == 4) {
    setTimeout(() => {
      $popupsCont.classList.add("s--popup-active");
      $popup.classList.add("s--active");
      document.querySelector("#txt-noiDung").innerHTML =
        "Dự báo thời tiết nói Valentine này anh phải ở cận em";
    }, 1000);
  }

  if (rollTotal == 5) {
    setTimeout(() => {
      $popupsCont.classList.add("s--popup-active");
      $popup.classList.add("s--active");
      document.querySelector("#txt-noiDung").innerHTML =
        "Dự báo thời tiết Valentine này nắng hanh <br/> Em nghe không rõ tưởng Valentine này có anh";
    }, 1000);
  }

  if (rollTotal == 6) {
    setTimeout(() => {
      $popupsCont.classList.add("s--popup-active");
      $popup.classList.add("s--active");
      document.querySelector("#txt-noiDung").innerHTML =
        "Gọi tình yêu của em là biển cả <br/> Vì nó luôn bao la";
    }, 1000);
  }

  

  setTimeout(winLossCount(), 1500);
} // END Come out roll function
