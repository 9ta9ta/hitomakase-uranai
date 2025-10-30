const fortuneBtn = document.getElementById('fortuneBtn');
const topImage = document.getElementById('topImage');
const resultContainer = document.getElementById('resultContainer');
const resultImage = document.getElementById('resultImage');
const resultText = document.getElementById('resultText');

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
  resultText.textContent = 'ミーをクリックするざんす！';
  showingB = false;

  // ✅ 結果A画像：やや大きめ（約95%）
  resultImage.style.width = '95%';
　resultImage.style.maxWidth = '480px';
　resultImage.style.maxHeight = '70vh';
　resultImage.style.objectFit = 'contain';

  // ✅ 効果音（A：kozutumi.mp3）
  const soundA = new Audio('kozutumi.mp3');
  soundA.play().catch(() => {});
});

resultImage.addEventListener('click', () => {
  if (!showingB) {
    resultImage.src = currentResult.b;
    resultText.textContent = 'あとは自力で叶えるざんす〜';
    showingB = true;

    // ✅ 結果B画像：やや小さめ（約75%）
    resultImage.style.width = '75%';
    resultImage.style.maxWidth = '380px';
    resultImage.style.maxHeight = '55vh';
    resultImage.style.objectFit = 'contain';

    // ✅ 効果音（B：pahu.mp3）
    const soundB = new Audio('pahu.mp3');
    soundB.play().catch(() => {});
  } else {
    resultContainer.classList.add('hidden');
    topImage.classList.remove('hidden');
    fortuneBtn.classList.remove('hidden');
  }
});
