/* ===================================
   KINETIC BRUTALISM
   Agile Velocity - Interactive Scripts
   =================================== */

// === MOBILE MENU ===
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileToggle.classList.remove('active');
        });
    });
}

// === TESTIMONIAL SLIDER ===
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
    testimonials.forEach((t, i) => {
        t.classList.toggle('active', i === index);
    });
    dots.forEach((d, i) => {
        d.classList.toggle('active', i === index);
    });
    currentSlide = index;
}

function nextSlide() {
    const next = (currentSlide + 1) % testimonials.length;
    showSlide(next);
}

// Dot click handlers
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        // Reset auto-slide timer
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 6000);
    });
});

// Auto-slide every 6 seconds
if (testimonials.length > 0) {
    autoSlideInterval = setInterval(nextSlide, 6000);
}

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            window.scrollTo({
                top: target.offsetTop - navHeight,
                behavior: 'smooth'
            });
        }
    });
});

// === SCROLL REVEAL ANIMATIONS ===
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Cards to animate
const animateCards = document.querySelectorAll('.outcome-card, .problem-card, .training-card, .hero-stat-card, .pyramid-block, .level-pill');
animateCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.5s ease ${(index % 4) * 0.1}s, transform 0.5s ease ${(index % 4) * 0.1}s`;
    revealObserver.observe(card);
});

// Section headers animation
const sectionHeaders = document.querySelectorAll('.section-header, .problems-header, .framework-left, .testimonials-header, .training-header');
const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            headerObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

sectionHeaders.forEach(header => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';
    header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    headerObserver.observe(header);
});

// === NAV BACKGROUND ON SCROLL ===
const nav = document.querySelector('.nav');
const topBar = document.querySelector('.top-bar');
let ticking = false;

const updateNav = () => {
    const scrollY = window.pageYOffset;
    const topBarHeight = topBar ? topBar.offsetHeight : 0;
    const isMobile = window.innerWidth <= 1024;

    if (scrollY > 50) {
        nav.style.background = 'rgba(12, 18, 34, 0.98)';
        nav.style.borderBottomColor = 'rgba(255, 140, 66, 0.1)';

        // Hide top bar on scroll (desktop only)
        if (topBar && !isMobile) {
            topBar.style.transform = 'translateY(-100%)';
            nav.style.top = '0';
        }
    } else {
        nav.style.background = 'rgba(12, 18, 34, 0.9)';
        nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.05)';

        // Show top bar when at top
        if (topBar && !isMobile) {
            topBar.style.transform = 'translateY(0)';
            nav.style.top = topBarHeight + 'px';
        }
    }
    ticking = false;
};

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateNav);
        ticking = true;
    }
});

// Handle resize
window.addEventListener('resize', updateNav);

// === BUTTON HOVER EFFECTS ===
const buttons = document.querySelectorAll('.btn-primary');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'translateY(-2px)';
    });
    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translateY(0)';
    });
});

// === PARALLAX BACKGROUND TEXT ===
const heroBgText = document.querySelector('.hero-bg-text');
const ctaBgText = document.querySelector('.cta-bg-text');

if (heroBgText || ctaBgText) {
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        if (heroBgText) {
            const heroOffset = scrollY * 0.15;
            heroBgText.style.transform = `translate(-50%, calc(-50% + ${heroOffset}px))`;
        }

        if (ctaBgText) {
            const cta = document.querySelector('.cta');
            const ctaTop = cta.offsetTop;
            const ctaOffset = (scrollY - ctaTop + window.innerHeight) * 0.1;
            if (scrollY + window.innerHeight > ctaTop) {
                ctaBgText.style.transform = `translate(-50%, calc(-50% + ${ctaOffset}px))`;
            }
        }
    });
}

// === CARD HOVER EFFECTS ===
const cards = document.querySelectorAll('.outcome-card, .problem-card, .training-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// === CONSOLE BRANDING ===
console.log('%c⚡ AGILE VELOCITY', 'font-size: 24px; font-weight: 700; font-family: system-ui; color: #ff8c42; background: #0a0c14; padding: 16px 24px; border-radius: 8px;');
console.log('%cKinetic Brutalism Design', 'font-size: 12px; color: #8b8f9a; font-family: system-ui;');
