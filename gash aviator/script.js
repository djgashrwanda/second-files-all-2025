let multiplier = 1;
let interval;
let playing = false;
let cashedOut = false;

document.getElementById('betButton').addEventListener('click', startGame);
document.getElementById('cashOutButton').addEventListener('click', cashOut);

function startGame() {
    if (playing) return;
    playing = true;
    cashedOut = false;
    multiplier = 2;
    document.getElementById('multiplierDisplay').textContent = "1.00x";
    document.getElementById('status').textContent = "Game started, good luck!";
    
    interval = setInterval(() => {
        multiplier += Math.random() * 0.2;
        document.getElementById('multiplierDisplay').textContent = multiplier.toFixed(2) + "x";

        if (Math.random() < 0.50) { // 5% chance of crash each tick
            clearInterval(interval);
            playing = false;
            if (!cashedOut) {
                document.getElementById('status').textContent = "Make more Money.";
            }
        }
    }, 100);
}

function cashOut() {
    if (!playing || cashedOut) return;
    clearInterval(interval);
    cashedOut = true;
    document.getElementById('status').textContent = `You cashed out at ${multiplier.toFixed(2)}x!`;
    playing = false;
}
