
function playerChoice(input) {
  let playerWeapon;
  if (input == 'rock') {
    playerWeapon = 'Rock'
    compare(playerWeapon)
  }
  else if (input == 'paper') {
    playerWeapon = 'Paper'
    compare(playerWeapon)
  }
  else if (input == 'scissors') {
    playerWeapon = 'Scissors'
    compare(playerWeapon)
  }
}

function compare(playerWeapon) {
  let cpuWeapon;
  let index = Math.floor(Math.random() * 3)
  if (index == 0) {
    cpuWeapon = "Rock"
    displayResult(playerWeapon, cpuWeapon)
  } else if (index == 1) {
    cpuWeapon = 'Paper'
    displayResult(playerWeapon, cpuWeapon)
  } else if (index == 2) {
    cpuWeapon = 'Scissors'
    displayResult(playerWeapon, cpuWeapon)
  }
}

function displayResult(playerWeapon, cpuWeapon) {
  document.querySelector("#cpuChoice").innerHTML = cpuWeapon
  if (playerWeapon == cpuWeapon) {
    document.querySelector("#winLoseTie").innerHTML = "Tie!"
  }
  else if (playerWeapon == "Rock" && cpuWeapon == "Scissors") {
    document.querySelector("#winLoseTie").innerHTML = "You win!"
  }
  else if (playerWeapon == "Scissors" && cpuWeapon == "Paper") {
    document.querySelector("#winLoseTie").innerHTML = "You win!"
  }
  else if (playerWeapon == "Paper" && cpuWeapon == "Rock") {
    document.querySelector("#winLoseTie").innerHTML = "You win!"
  }
  else if (playerWeapon == "Rock" && cpuWeapon == "Paper") {
    document.querySelector("#winLoseTie").innerHTML = "You lose!"
  }
  else if (playerWeapon == "Scissors" && cpuWeapon == "Rock") {
    document.querySelector("#winLoseTie").innerHTML = "You lose!"
  }
  else if (playerWeapon == "Paper" && cpuWeapon == "Scissors") {
    document.querySelector("#winLoseTie").innerHTML = "You lose!"
  }
}