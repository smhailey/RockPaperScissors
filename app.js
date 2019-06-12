
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
  console.log("index", index)
  console.log("player choice", playerWeapon)
  console.log("cpu choice", cpuWeapon)
}

function displayResult(playerWeapon, cpuWeapon) {
  document.getElementById("cpuChoice").innerHTML = cpuWeapon
  if (playerWeapon == cpuWeapon) {
    document.getElementById("winLoseTie").innerHTML = "Tie!"
  }
  else if (playerWeapon == "Rock" && cpuWeapon == "Scissors") {
    document.getElementById("winLoseTie").innerHTML = "You win!"
  }
  else if (playerWeapon == "Scissors" && cpuWeapon == "Paper") {
    document.getElementById("winLoseTie").innerHTML = "You win!"
  }
  else if (playerWeapon == "Paper" && cpuWeapon == "Rock") {
    document.getElementById("winLoseTie").innerHTML = "You win!"
  }
  else if (playerWeapon == "Rock" && cpuWeapon == "Paper") {
    document.getElementById("winLoseTie").innerHTML = "You lose!"
  }
  else if (playerWeapon == "Scissors" && cpuWeapon == "Rock") {
    document.getElementById("winLoseTie").innerHTML = "You lose!"
  }
  else if (playerWeapon == "Paper" && cpuWeapon == "Scissors") {
    document.getElementById("winLoseTie").innerHTML = "You lose!"
  }
}