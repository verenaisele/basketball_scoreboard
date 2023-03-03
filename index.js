let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let homePoints = 0
let guestPoints = 0

function add1() {
    homePoints += 1
    scoreHome.textContent = homePoints
}

function add2() {
    homePoints += 2
    scoreHome.textContent = homePoints
}

function add3() {
    homePoints += 3
    scoreHome.textContent = homePoints
}