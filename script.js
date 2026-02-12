// Scroll-triggered animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all memory containers and final content
document.querySelectorAll('.memory-container, .final-content').forEach(el => {
    observer.observe(el);
});

// Music player functionality
const audio = document.getElementById('bgMusic');
const playPauseBtn = document.getElementById('playPause');
const statusText = document.querySelector('.music-player .status');

playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        // Check if audio source is added
        if (audio.querySelector('source')) {
            audio.play();
            playPauseBtn.textContent = '⏸';
            statusText.textContent = 'Playing...';
        } else {
            statusText.textContent = 'No music file added yet';
            setTimeout(() => {
                statusText.textContent = 'Add your music';
            }, 2000);
        }
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶';
        statusText.textContent = 'Paused';
    }
});

// Update status when audio ends
audio.addEventListener('ended', () => {
    playPauseBtn.textContent = '▶';
    statusText.textContent = 'Finished';
});
