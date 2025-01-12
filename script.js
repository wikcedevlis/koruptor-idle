let money = 0;
let incomePerTap = 1;
let upgradeCost = 10;
let idleIncome = 0;
const idleInterval = 1000; // 1 detik
const eventInterval = 5000; // Event setiap 5 detik

const moneyDisplay = document.getElementById('money');
const incomeDisplay = document.getElementById('income');
const tapButton = document.getElementById('tap-button');
const upgradeButton = document.getElementById('upgrade-button');
const eventMessage = document.getElementById('event-message');

// Tambahkan suara
const tapSound = new Audio('click-151673.mp3');
const upgradeSound = new Audio('level-up-191997.mp3');
const eventSound = new Audio('notification-22-270130.mp3');

// Tap untuk mendapatkan uang
tapButton.addEventListener('click', () => {
  console.log("Tombol Tap ditekan");
  money += incomePerTap;
  tapSound.play(); // Putar suara
  updateDisplay();
});

// Upgrade untuk meningkatkan pendapatan per klik
upgradeButton.addEventListener('click', () => {
  console.log("Tombol Upgrade ditekan");
  if (money >= upgradeCost) {
    money -= upgradeCost;
    incomePerTap += 1;
    upgradeCost *= 2; // Gandakan biaya upgrade berikutnya
    upgradeSound.play(); // Putar suara upgrade
    upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost})`;
    updateDisplay();
  } else {
    alert('Not enough money!');
  }
});

// Tambahkan idle income
setInterval(() => {
  if (idleIncome > 0) {
    money += idleIncome;
    updateDisplay();
  }
}, idleInterval);

// Tambahkan event acak
setInterval(() => {
  const eventType = Math.random(); // 0 - 1
  if (eventType < 0.5) {
    // Bonus event
    const bonus = Math.floor(Math.random() * 20) + 10; // Bonus antara 10-30
    money += bonus;
    eventMessage.textContent = `Bonus! You earned ${bonus}!`;
    eventMessage.style.color = 'green';
    eventSound.play();
  } else {
    // Denda event
    const penalty = Math.floor(Math.random() * 15) + 5; // Denda antara 5-20
    money -= penalty;
    if (money < 0) money = 0; // Pastikan tidak minus
    eventMessage.textContent = `Oh no! You lost ${penalty}!`;
    eventMessage.style.color = 'red';
    eventSo
