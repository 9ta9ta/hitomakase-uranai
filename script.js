const fortuneButton = document.getElementById("fortune-button");
const fortuneImage = document.getElementById("fortune-image");
const fortuneText = document.getElementById("fortune-text");

const resultSets = [
  { a: "result_01_a.png", b: "result_01_b.png" },
  { a: "result_02_a.png", b: "result_02_b.png" },
  { a: "result_03_a.png", b: "result_03_b.png" }
];

let currentSet = null;
let stage = 0; // 0=トップ, 1=result_a, 2=result_b

fortuneButton.addEventListener("click", () => {
  currentSet = resultSets[Math.floor(Math.random() * resultSets.length)];
  // ボタンを隠す
  fortuneButton.style.display = "none";
  // 画像とテキストを同時に切替
  fortuneImage.src = currentSet.a;
  fortuneText.textContent = "ミーをクリックするざんす！";
  stage = 1;
});

fortuneImage.addEventListener("click", () => {
  if (stage === 1) {
    fortuneImage.src = currentSet.b;
    fortuneText.textContent = "あとは自力で叶えるざんす〜";
    stage = 2;
  } else if (stage === 2) {
    fortuneImage.src = "top.png";
    fortuneText.textContent = "";
    stage = 0;
    // トップに戻るときにボタンを再表示
    fortuneButton.style.display = "block";
  }
});
