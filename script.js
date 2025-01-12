// script.js 1
let money = 0;
let incomePerTap = 1;
let upgradeCost = 10;

const moneyDisplay = document.getElementById('money');
const incomeDisplay = document.getElementById('income');
const tapButton = document.getElementById('tap-button');
const upgradeButton = document.getElementById('upgrade-button');

// Tap to earn money
tapButton.addEventListener('click', () => {
  money += incomePerTap;
  updateDisplay();
});

// Upgrade to increase income per tap
upgradeButton.addEventListener('click', () => {
  if (money >= upgradeCost) {
    money -= upgradeCost;
    incomePerTap += 1;
    upgradeCost *= 2; // Double the cost for the next upgrade
    upgradeButton.textContent = `Upgrade (Cost: ${upgradeCost})`;
    updateDisplay();
  } else {
    alert('Not enough money!');
  }
});

// Update displayed values
function updateDisplay() {
  moneyDisplay.textContent = money;
  incomeDisplay.textContent = incomePerTap;
}

// script.js 2
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
  money += incomePerTap;
  tapSound.play(); // Putar suara
  updateDisplay();
});

// Upgrade untuk meningkatkan pendapatan per klik
upgradeButton.addEventListener('click', () => {
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
    eventSound.play();
  }
  updateDisplay();
  // Hapus pesan setelah 3 detik
  setTimeout(() => {
    eventMessage.textContent = '';
  }, 3000);
}, eventInterval);

// Update tampilan
function updateDisplay() {
  moneyDisplay.textContent = money;
  incomeDisplay.textContent = incomePerTap;
}

let money = 10000;  // Uang awal
let corruptionLevel = 1;

// Fungsi untuk memperbarui tampilan uang
function updateDisplay() {
    document.getElementById("moneyDisplay").innerText = "Uang: " + money;
}

// Event KPK
function triggerKPKCheck() {
    let randomChance = Math.random();
    if(randomChance < 0.05) {  // 5% chance untuk memicu
        alert("KPK datang untuk memeriksa laporan Anda!");
        money -= 5000;  // Pengurangan uang karena denda
        updateDisplay();  // Memperbarui tampilan UI
    }
}
setInterval(triggerKPKCheck, 30000);  // Setiap 30 detik

// Event Skandal Netizen
function triggerViralScandal() {
    let randomChance = Math.random();
    if(randomChance < 0.1) {  // 10% chance untuk memicu
        alert("Netizen menyebarkan bukti skandal Anda!");
        money -= 2000;  // Pengurangan uang
        updateDisplay();  // Memperbarui tampilan UI
    }
}
setInterval(triggerViralScandal, 60000);  // Setiap 60 detik

// Korupsi Level
function increaseCorruption() {
    if(corruptionLevel < 10) {
        corruptionLevel++;
        money += 1000 * corruptionLevel;  // Dapatkan lebih banyak uang
        alert("Korupsi Anda meningkat! Level: " + corruptionLevel);
        updateDisplay();  // Memperbarui tampilan UI
    }
}
setInterval(increaseCorruption, 15000);  // Setiap 15 detik

// Risiko Korupsi
function handleCorruptionRisk() {
    if(corruptionLevel > 5) {
        let randomChance = Math.random();
        if(randomChance < 0.2) {  // 20% chance untuk memicu risiko
            alert("Risiko korupsi tinggi! Denda atau pemeriksaan datang.");
            money -= 5000;  // Pengurangan uang
            updateDisplay();  // Memperbarui tampilan UI
        }
    }
}
setInterval(handleCorruptionRisk, 30000);  // Setiap 30 detik

// Memperbarui tampilan awal
updateDisplay();

