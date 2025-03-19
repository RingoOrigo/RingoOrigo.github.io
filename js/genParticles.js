const container = document.getElementById('particleContainer');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Randomize particle position and size
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.animationDuration = `${8 + Math.random() * 12}s`;

    container.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 8000);
}

setInterval(createParticle, 300);