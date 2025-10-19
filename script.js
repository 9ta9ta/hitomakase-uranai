const fortuneBtn = document.getElementById('fortuneBtn');
const topImage = document.getElementById('topImage');
const resultContainer = document.getElementById('resultContainer');
const resultImage = document.getElementById('resultImage');
const resultText = document.getElementById('resultText');

const results = [
  { a: 'result_01_a.png', b: 'result_01_b.png' },
  { a: 'result_02_a.png', b: 'result_02_b.png' },
  { a: 'result_03_a.png', b: 'result_03_b.png' },
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
  resultText.textContent = 'ミーをクリックするざんす！';
  showingB = false;
});

resultImage.addEventListener('click', () => {
  if (!showingB) {
    resultImage.src = currentResult.b;
    resultText.textContent = 'あとは自力で叶えるざんす〜';
    showingB = true;
  } else {
    resultContainer.classList.add('hidden');
    topImage.classList.remove('hidden');
    fortuneBtn.classList.remove('hidden');
  }
});
