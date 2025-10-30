const fortuneBtn = document.getElementById('fortuneBtn');
const topImage = document.getElementById('topImage');
const resultContainer = document.getElementById('resultContainer');
const resultImage = document.getElementById('resultImage');
const resultText = document.getElementById('resultText');

// 効果音
const soundA = new Audio('kozutumi.mp3');
const soundB = new Audio('pahu.mp3');

const results = [
  { a: 'result_01_a.png', b: 'result_01_b.png' },
  { a: 'result_02_a.png', b: 'result_02_b.png' },
  { a: 'result_03_a.png', b: 'result_03_b.png' },
  { a: 'result_04_a.png', b: 'result_04_b.png' },
  { a: 'result_05_a.png', b: 'result_05_b.png' },
  { a: 'result_06_a.png', b: 'result_06_b.png' },
];

let currentResult = null;
let showingB = false;

fortuneBtn.addEventListener('click', () => {
  const idx = Math.floor(Math.random() * results.length);
  currentResult = results[idx];

  topImage.classList.add('hidden');
  fortuneBtn.classList.add('hidden');

  resultContainer.classList.remove('hidden');
  resultImage.src = currentResult.a;
  resultImage.classList.remove('b-small'); // A画像は通常サイズ
  resultText.textContent = 'ミーをクリックするざんす！';
  showingB = false;

  soundA.currentTime = 0; // 再生位置リセット
  soundA.play();           // 効果音再生
});

resultImage.addEventListener('click', () => {
  if (!showingB) {
    resultImage.src = currentResult.b;
    resultImage.classList.add('b-small'); // B画像を小さく
    resultText.textContent = 'あとは自力で叶えるざんす〜';
    showingB = true;

    soundB.currentTime = 0;
    soundB.play(); // B画像効果音再生
  } else {
    resultContainer.classList.add('hidden');
    topImage.classList.remove('hidden');
    fortuneBtn.classList.remove('hidden');
  }
});
