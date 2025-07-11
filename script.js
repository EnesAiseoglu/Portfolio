// Particles.js Konfigürasyonu
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#00a3ff'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#00a3ff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 0.6
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Typed.js Konfigürasyonu
const typed = new Typed('.typed-text', {
    strings: [
        'Frontend Developer',
        'UI/UX Designer',
        'Web Developer'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// Mobil menü işlevselliği
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Menüyü aç/kapat
    nav.classList.toggle('active');

    // Link animasyonları
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger animasyonu
    burger.classList.toggle('active');
});

// Scroll animasyonları
const sections = document.querySelectorAll('section');
const navHeight = document.querySelector('.navbar').offsetHeight;

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - navHeight) {
            current = section.getAttribute('id');
        }
    });

    // Aktif menü öğesini güncelle
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
}); 

// Mouse takip efekti için
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.skill-card');

    const handleMouseMove = (e) => {
        const cards = document.querySelectorAll('.skill-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    };

    cards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
    });
}); 

// Scroll to top button
let lastScrollTop = 0;
const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show/hide scroll button
    if (scrollTop > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
    
    // Add ascending class when scrolling up
    if (scrollTop < lastScrollTop) {
        scrollTopBtn.classList.add('ascending');
    } else {
        scrollTopBtn.classList.remove('ascending');
    }
    
    lastScrollTop = scrollTop;
});

scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 
