// Set the anniversary date (adjust this to your actual anniversary date)
const anniversaryDate = new Date('2020-05-28T18:24:00'); // Updated to May 28, 2020, 6:24pm

function updateCountdown() {
    const now = new Date();
    const diff = now - anniversaryDate;

    // Calculate years, days, hours, minutes, and seconds
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.2425));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.2425)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Update the DOM
    document.getElementById('years').textContent = years;
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial update

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Add floating hearts animation
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts periodically
setInterval(createHeart, 3000);

// Add CSS for floating hearts
const style = document.createElement('style');
style.textContent = `
    .floating-heart {
        position: fixed;
        bottom: -20px;
        font-size: 20px;
        animation: float-up linear forwards;
        z-index: 1000;
    }

    @keyframes float-up {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }

    section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    section.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Starry background effect
function createStars() {
    const starryBg = document.querySelector('.starry-bg');
    if (!starryBg) return;
    starryBg.innerHTML = '';
    for (let i = 0; i < 80; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.width = star.style.height = Math.random() * 2 + 1 + 'px';
        star.style.background = 'rgba(255,255,255,0.8)';
        star.style.borderRadius = '50%';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        star.style.boxShadow = `0 0 8px 2px #fff8`;
        // Add blinking animation
        const duration = (Math.random() * 2 + 1).toFixed(2);
        const delay = (Math.random() * 3).toFixed(2);
        star.style.animation = `star-blink ${duration}s infinite alternate`;
        star.style.animationDelay = `${delay}s`;
        starryBg.appendChild(star);
    }
}
createStars();
window.addEventListener('resize', createStars);

// Floating glowing hearts in the background
function createBgHeart() {
    const bgHearts = document.querySelector('.floating-bg-hearts');
    if (!bgHearts) return;
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'absolute';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-40px';
    heart.style.fontSize = (Math.random() * 24 + 24) + 'px';
    heart.style.opacity = 0.5 + Math.random() * 0.5;
    heart.style.filter = 'drop-shadow(0 0 12px #ff6b6b)';
    heart.style.animation = `float-bg-heart ${Math.random() * 4 + 6}s linear forwards`;
    bgHearts.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
}
setInterval(createBgHeart, 1200);

const bgHeartStyle = document.createElement('style');
bgHeartStyle.textContent = `
@keyframes float-bg-heart {
    0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.7; }
    80% { opacity: 0.7; }
    100% { transform: translateY(-100vh) scale(1.2) rotate(30deg); opacity: 0; }
}
`;
document.head.appendChild(bgHeartStyle);

const starBlinkStyle = document.createElement('style');
starBlinkStyle.textContent = `
@keyframes star-blink {
    0% { opacity: 0.7; }
    50% { opacity: 0.2; }
    100% { opacity: 1; }
}
`;
document.head.appendChild(starBlinkStyle); 