const fortuneBtn = document.getElementById('fortuneBtn');
const topImage = document.getElementById('topImage');
const resultContainer = document.getElementById('resultContainer');
const resultImage = document.getElementById('resultImage');
const resultText = document.getElementById('resultText');

// 結果A/Bの対応配列
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

// 占うボタンクリック
fortuneBtn.addEventListener('click', () => {
  const idx = Math.floor(Math.random() * results.length);
  currentResult = results[idx];

  topImage.classList.add('hidden');
  fortuneBtn.classList.add('hidden');

  resultContainer.classList.remove('hidden');
  resultImage.src = currentResult.a;
  resultImage.classList.add('a-small'); // A画像は縮小
  resultText.textContent = 'ミーをクリックするざんす！';
  showingB = false;

  // 効果音A（クリックイベント内で作る）
  const soundA = new Audio('kozutumi.mp3');
  soundA.play().catch(e => console.log("A音再生エラー:", e));
});

// 結果画像クリック
resultImage.addEventListener('click', () => {
  if (!showingB) {
    resultImage.src = currentResult.b;
    resultImage.classList.remove('a-small'); // B画像は原寸
    resultText.textContent = 'あとは自力で叶えるざんす〜';
    showingB = true;

    // 効果音B
    const soundB = new Audio('pahu.mp3');
    soundB.play().catch(e => console.log("B音再生エラー:", e));
  } else {
    resultContainer.classList.add('hidden');
    topImage.classList.remove('hidden');
    fortuneBtn.classList.remove('hidden');
  }
});
