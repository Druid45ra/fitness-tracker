document.getElementById('show-register').addEventListener('click', function() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
});

// Înregistrare utilizator nou
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;

    if (localStorage.getItem(username)) {
        alert('Acest utilizator există deja.');
    } else {
        localStorage.setItem(username, password);
        alert('Înregistrare reușită. Te poți autentifica acum.');
        document.getElementById('login-section').style.display = 'block';
        document.getElementById('register-section').style.display = 'none';
    }
});

// Autentificare utilizator
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const storedPassword = localStorage.getItem(username);
    
    if (storedPassword && storedPassword === password) {
        alert('Autentificare reușită!');
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'index.html';
    } else {
        alert('Utilizator sau parolă greșită.');
    }
});

// Verifică dacă utilizatorul este autentificat
window.onload = function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        window.location.href = 'index.html';
    }
};
