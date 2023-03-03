let scoreHome = document.getElementById('score-home');
let scoreGuest = document.getElementById('score-guest');
let homePoints = 0;
let guestPoints = 0;

function add1ToHome() {
  homePoints += 1;
  scoreHome.textContent = homePoints;
}

function add2ToHome() {
  homePoints += 2;
  scoreHome.textContent = homePoints;
}

function add3ToHome() {
  homePoints += 3;
  scoreHome.textContent = homePoints;
}

function add1ToGuest() {
  guestPoints += 1;
  scoreGuest.textContent = guestPoints;
}

function add2ToGuest() {
  guestPoints += 2;
  scoreGuest.textContent = guestPoints;
}

function add3ToGuest() {
  guestPoints += 3;
  scoreGuest.textContent = guestPoints;
}
