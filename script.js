function blowCandles() {
    document.querySelector('.candles').style.display = 'none';
    document.body.classList.add('dark-mode');
    document.getElementById('wish').style.display = 'none';
    createSparkles();
}

function createSparkles() {
    const sparkleContainer = document.getElementById('sparkles');
    const colors = ['#ffffff', '#d1a3ff', '#ffccff', '#ccffff', '#ffd1dc', '#e0bbff'];

    for (let i = 0; i < 70; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';

        const size = Math.random() * 10 + 8;
        const color = colors[Math.floor(Math.random() * colors.length)];

sparkle.style.width = `${size}px`;
sparkle.style.height = `${size}px`;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.background = `radial-gradient(circle, ${color} 0%, transparent 80%)`;
        sparkle.style.boxShadow = `0 0 8px ${color}`;

        sparkleContainer.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 12000);
    }

    const sound = document.getElementById('sparkleSound');
    if (sound) sound.play();
}


function again() {
    document.querySelector('.candles').style.display ='inline';
    document.body.classList.remove('dark-mode');
    document.getElementById('wish').style.display ='block';
}
