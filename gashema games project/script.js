const bird = document.getElementById('bird');
const scoreElement = document.getElementById('score');
let pipes = document.querySelectorAll('.pipe');
let gameContainer = document.querySelector('.game-container');

// Bird Variables
let birdY = 250;
let gravity = 2;
let jump = -30;

// Game Variables
let isGameOver = false;
let score = 0;

// Move Pipes
function movePipes() {
    pipes.forEach(pipe => {
        let pipeX = pipe.offsetLeft;

        if (pipeX < -60) {
            // Move pipe back to the right and randomize the height
            pipe.style.left = '400px';
            if (pipe.classList.contains('pipe-top')) {
                let randomHeight = Math.floor(Math.random() * 200) + 50;
                pipe.style.height = randomHeight + 'px';
            }
            score++;
            scoreElement.textContent = 'Score: ' + score;
        } else {
            pipe.style.left = pipeX - 2 + 'px';
        }
    });
}

// Bird Jump
function fly() {
    birdY += jump;
}

// Game Loop
function gameLoop() {
    if (!isGameOver) {
        // Apply gravity to bird
        birdY += gravity;
        bird.style.top = birdY + 'px';

        // Check for collision with the ground or pipes
        pipes.forEach(pipe => {
            if (isColliding(bird, pipe)) {
                endGame();
            }
        });

        // Move pipes
        movePipes();

        // Check if bird touches the ground or top of the game container
        if (birdY >= 560 || birdY <= 0) {
            endGame();
        }

        requestAnimationFrame(gameLoop);
    }
}

// Check if Bird is Colliding with a Pipe
function isColliding(bird, pipe) {
    const birdRect = bird.getBoundingClientRect();
    const pipeRect = pipe.getBoundingClientRect();

    return !(
        birdRect.bottom < pipeRect.top ||
        birdRect.top > pipeRect.bottom ||
        birdRect.right < pipeRect.left ||
        birdRect.left > pipeRect.right
    );
}

// End Game
function endGame() {
    isGameOver = true;
    alert('Game Over! Final Score: ' + score);
    window.location.reload();
}

// Control Bird (Fly on Key Press)
document.addEventListener('keydown', () => {
    if (!isGameOver) fly();
});

// Start the Game
gameLoop();
