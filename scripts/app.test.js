// app.test.js

const { saveData, loadData } = require('./scripts/app');

describe('saveData', () => {
    it('should save data to localStorage', () => {
        saveData();
        const data = JSON.parse(localStorage.getItem('fitnessTrackerData'));
        expect(data).not.toBeNull();
    });
});

describe('loadData', () => {
    it('should load data from localStorage and update steps and total calories display', () => {
        localStorage.setItem('fitnessTrackerData', JSON.stringify({ steps: 10, totalCalories: 100 }));
        loadData();
        expect(steps).toBe(10);
        expect(totalCalories).toBe(100);
    });
});

let timer;
let seconds = 0;

document.getElementById('start-timer').addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            document.getElementById('timer-display').textContent = new Date(seconds * 1000).toISOString().substr(11, 8);
        }, 1000);
    }
});

document.getElementById('stop-timer').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

document.getElementById('reset-timer').addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    seconds = 0;
    document.getElementById('timer-display').textContent = '00:00:00';
});

