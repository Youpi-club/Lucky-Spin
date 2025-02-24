const prizes = [
  { id: 0, msg: "50% de réduction" },
  { id: 1, msg: "Une autre chance" },
  { id: 2, msg: "10% de réduction" },
  { id: 3, msg: "Un ballon" },
  { id: 4, msg: "Pas de chance" },
  { id: 5, msg: "25% de réduction" },
  { id: 6, msg: "+25 points" },
  { id: 7, msg: "Un porte-clés" },
  { id: 8, msg: "Bonbon gratuit" },
  { id: 9, msg: "Pas de chance" },
  { id: 10, msg: "20% de réduction" },
  { id: 11, msg: "Un stylo" }
];

var activeBtn = false;
var audio = new Audio("./assets/wheel-audio.mp3");

function randomNum() {
  var prizeNum = Math.random() * 12;
  prizeNum = Math.floor(prizeNum);
  console.log(prizeNum);
  return prizeNum;
}

function removeClass() {
  prize = randomNum();

  document.getElementById("spinner").classList.remove("spin");
  document.getElementById("spin-btn").classList.remove("disabled");

  document.getElementById("spinner").style.transform = "rotate(" + prize * 30 + "deg)";

  $(".pop-up-content").fadeIn();

  setTimeout(function () {
    document.getElementById("spin-btn").disabled = false;
    document.getElementById("arrow").classList.add("float");
    activeBtn = false;
  }, 2000);

  prizeText = prizes[prize].msg;
  document.getElementsByClassName("pop-up-para")[0].innerHTML = prizeText;
  $(".pop-up").fadeIn();
}

function spin() {
  activeBtn = true;
  audio.play();

  document.getElementById("arrow").classList.remove("float");
  document.getElementById("spinner").classList.add("spin");
  document.getElementById("spin-btn").disabled = true;

  setTimeout(removeClass, 5000);
}

// Add event listener to hide pop-up when clicking anywhere outside
document.getElementById('body').addEventListener('click', function (event) {
  var popUp = document.querySelector('.pop-up-content');
  if (!popUp.contains(event.target) && popUp.style.display === 'block') {
    $(".pop-up-content").fadeOut(); // Hide the pop-up when clicked outside
  }
});

// Triggering spin on spacebar keypress (optional)
document.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.key === " " && activeBtn === false) {
    $("#spin-btn").trigger("click");
  }
});
