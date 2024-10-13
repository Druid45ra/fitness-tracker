// scripts/app.js

// Variabile globale
let steps = 0;
let totalCalories = 0;

// Elemente din DOM
const stepsDisplay = document.getElementById('steps');
const addStepButton = document.getElementById('add-step');
const caloriesInput = document.getElementById('calories-input');
const addCaloriesButton = document.getElementById('add-calories');
const totalCaloriesDisplay = document.getElementById('total-calories');

// Funcție pentru încărcarea datelor din localStorage
function loadData() {
    const data = JSON.parse(localStorage.getItem('fitnessTrackerData'));
    if (data) {
        steps = data.steps || 0;
        totalCalories = data.totalCalories || 0;
        stepsDisplay.textContent = steps;
        totalCaloriesDisplay.textContent = totalCalories;
    }
}

// Funcție pentru salvarea datelor în localStorage
function saveData() {
    const data = {
        steps: steps,
        totalCalories: totalCalories
    };
    localStorage.setItem('fitnessTrackerData', JSON.stringify(data));
}

// Inițializare la încărcarea paginii
window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (!loggedInUser) {
        window.location.href = 'login.html';
    } else {
        loadData();
    }
};

// Contor de pași - Adăugare pași
addStepButton.addEventListener('click', () => {
    steps++;
    stepsDisplay.textContent = steps;
    saveData();
});

// Monitorizare calorii - Adăugare calorii
addCaloriesButton.addEventListener('click', () => {
    const calories = parseInt(caloriesInput.value);
    if (!isNaN(calories)) {
        totalCalories += calories;
        totalCaloriesDisplay.textContent = totalCalories;
        caloriesInput.value = '';
        saveData();
    }
});

// Gestionare deconectare
document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
});
