let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click", play);

function pickRandomNumb() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}

function play() {
  let userValue = userInput.value;
  console.log(userValue);
  if (userValue < computerNum) {
    resultArea.textContent = "UP!!!"
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!!!"
  } else {
    resultArea.textContent = "맞췄습니다!!!"
  }
}
pickRandomNumb();
