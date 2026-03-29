// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Generate Particles
function initParticles() {
    const container = document.getElementById('particle-container');
    const particleCount = 60;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Randomize position, size, and animation duration
        const size = Math.random() * 4 + 1;
        const left = Math.random() * 100;
        const duration = Math.random() * 12 + 8; // 8 to 20 seconds
        const delay = Math.random() * -20; // negative delay so they start at different points

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}vw`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;
        
        // Slight opacity variation
        particle.style.opacity = Math.random() * 0.4 + 0.1;

        container.appendChild(particle);
    }
}

// 2. Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 3. Initial Hero Animations
function initHeroAnimations() {
    const tl = gsap.timeline();

    // Reveal Greeting
    tl.from('.greeting', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
    })
    // Reveal Name (pop effect)
    .from('.name', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'back.out(1.7)'
    }, '-=0.7')
    // Reveal Subtitle
    .to('.hero-subtitle', {
        opacity: 1,
        y: -10,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8');
}

// 4. Scroll Reveal Animations
function initScrollAnimations() {
    // Reveal Sections
    gsap.utils.toArray('.section-reveal').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Staggered Project Cards
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects-section',
            start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Social Card Entrance
    gsap.from('.social-card', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 75%',
        },
        scale: 0.9,
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.5)'
    });
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initHeroAnimations();
    initScrollAnimations();
});
