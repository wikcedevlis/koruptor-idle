// script.js
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
