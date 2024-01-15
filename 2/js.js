let intervalId = null;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    const clockElement = document.getElementById('reloj');
    clockElement.innerHTML = `<span style="color: ${getRandomColor()};">${hours}</span>:<span style="color: ${getRandomColor()};">${minutes}</span>:<span style="color: ${getRandomColor()};">${seconds}</span>`;
}

function startClock() {
    if (!intervalId) {
        intervalId = setInterval(updateTime, 1000);
    }
}

function stopClock() {
    clearInterval(intervalId);
    intervalId = null;
}

document.getElementById('start').addEventListener('click', startClock);
document.getElementById('stop').addEventListener('click', stopClock);

// Inicializar reloj al cargar la página
window.onload = updateTime;
