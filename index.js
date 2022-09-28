const dices = [
  "img/dice_1.png",
  "img/dice_2.png",
  "img/dice_3.png",
  "img/dice_4.png",
  "img/dice_5.png",
  "img/dice_6.png"
];

const images = document.getElementsByTagName("img");
const pointage = document.getElementById("pointage");
const bonus = document.getElementById("bonus");
const total = document.getElementById("total");
const cumulatif = document.getElementById("cumulatif");

var score_cumul = 0;

const jouer = () => {
  var score = 0;
  var score_bonus = 0;
  var score_total = 0;
  var sorted_dices = [];

  for (let i = 0; i < 3; i++) {
    const dice = Math.floor(Math.random() * dices.length);
    sorted_dices.push(dice);
    images[i].src = dices[dice];
    score += (dice + 1);
  }
  score_bonus = getBonus(sorted_dices);
  score_total = score + score_bonus
  score_cumul += score_total;

  pointage.innerHTML = score;
  bonus.innerHTML = score_bonus;
  total.innerHTML = score_total;
  cumulatif.innerHTML = score_cumul;
}

const reset = () => {
  for (let i = 0; i < 3; i++) {
    images[i].src = "img/dice_0.png";
  }
  score_cumul = 0;
  pointage.innerHTML = 0;
  bonus.innerHTML = 0;
  total.innerHTML = 0;
  cumulatif.innerHTML = score_cumul;
}

const getBonus = (tab) => {
  if (tab[0] == tab[1] && tab[1] == tab[2]) {
    return 10;
  }
  else if (tab[0] == tab[1] || tab[0] == tab[2] || tab[1] == tab[2]) {
    return 5
  }
  else {
    return 0;
  }
}