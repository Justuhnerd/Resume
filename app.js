// Typing Effect
const texts = [
    "Software Engineer",
    "Frontend Developer",
    "Problem Solver",
    "Continuous Learner"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 50;
let newTextDelay = 2000;

function type() {
    const currentText = texts[textIndex];
    const typingElement = document.getElementById('typing-text');
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = erasingDelay;
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingDelay = newTextDelay;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;
        if (textIndex >= texts.length) textIndex = 0;
        typingDelay = 500;
    }
    
    setTimeout(type, typingDelay);
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    });
});

// Header Scroll Effect
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 200) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

// Theme Toggle Functionality
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Default theme = Dark
    document.body.classList.remove('light-mode');
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');

    // Toggle theme function
    function toggleTheme() {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }
    
    // Event listener for theme toggle
    themeToggle.addEventListener('click', toggleTheme);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    type(); // Start typing effect
    initTheme(); // Initialize theme functionality
});




 // NEW INTERACTIVE FUNCTIONALITY
        
        // Initialize particles.js
        document.addEventListener('DOMContentLoaded', function() {
            // Only initialize particles if the element exists
            if (document.getElementById('particles-js')) {
                particlesJS('particles-js', {
                    particles: {
                        number: { value: 30, density: { enable: true, value_area: 800 } },
                        color: { value: "#4c00ff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5, random: true },
                        size: { value: 3, random: true },
                        line_linked: { enable: true, distance: 150, color: "#4c00ff", opacity: 0.4, width: 1 },
                        move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } }
                    }
                });
            }
            
            // Initialize custom cursor
            initCustomCursor();
            
            // Initialize scroll progress
            initScrollProgress();
            
            // Initialize scroll animations
            initScrollAnimations();
            
            // Initialize tilt effects
            initTiltEffects();
            
            // Add confetti effect to contact button
          //  initConfetti();
            
            // Add typing sound effect
           // initTypingSound();
        });
        
        // Custom cursor
        function initCustomCursor() {
            const cursor = document.querySelector('.cursor');
            const cursorFollower = document.querySelector('.cursor-follower');
            
            document.addEventListener('mousemove', function(e) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
                
                setTimeout(function() {
                    cursorFollower.style.left = e.clientX + 'px';
                    cursorFollower.style.top = e.clientY + 'px';
                }, 100);
            });
            
            // Add hover effects to interactive elements
            const hoverElements = document.querySelectorAll('a, button, .skill-card, .project-card, .contact-card, .theme-toggle, .back-to-top');
            
            hoverElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.classList.add('hover');
                    cursorFollower.classList.add('hover');
                });
                
                el.addEventListener('mouseleave', () => {
                    cursor.classList.remove('hover');
                    cursorFollower.classList.remove('hover');
                });
            });
        }
        
        // Scroll progress indicator
        function initScrollProgress() {
            window.addEventListener('scroll', () => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height) * 100;
                document.getElementById('progressBar').style.width = scrolled + '%';
            });
        }
        
        // Scroll animations
        function initScrollAnimations() {
            const elements = document.querySelectorAll('.fade-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });
            
            elements.forEach(el => observer.observe(el));
        }
        
        // 3D tilt effect
        function initTiltEffects() {
            const cards = document.querySelectorAll('.skill-card, .project-card, .contact-card');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', function(e) {
                    const cardInner = this;
                    const cardRect = cardInner.getBoundingClientRect();
                    const x = e.clientX - cardRect.left;
                    const y = e.clientY - cardRect.top;
                    
                    const centerX = cardRect.width / 2;
                    const centerY = cardRect.height / 2;
                    
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    
                    cardInner.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                });
            });
        }
        
        // Confetti effect
        function initConfetti() {
            const contactBtn = document.querySelector('a[href="#contact"]');
            const canvas = document.getElementById('confetti-canvas');
            
            if (contactBtn && canvas) {
                contactBtn.addEventListener('click', function(e) {
                    if (this.getAttribute('href') === '#contact') {
                        e.preventDefault();
                        showConfetti();
                        setTimeout(() => {
                            window.location.href = '#contact';
                        }, 1500);
                    }
                });
            }
            
            function showConfetti() {
                canvas.style.display = 'block';
                const ctx = canvas.getContext('2d');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                
                const confetti = [];
                const confettiCount = 200;
                const gravity = 0.5;
                const terminalVelocity = 5;
                const drag = 0.075;
                const colors = [
                    { front: '#4c00ff', back: '#2537ef' },
                    { front: '#ff3860', back: '#ff3860' },
                    { front: '#2bff00', back: '#1a9c00' },
                    { front: '#ffeb00', back: '#f7d500' }
                ];
                
                // Initialize confetti particles
                for (let i = 0; i < confettiCount; i++) {
                    confetti.push({
                        color: colors[Math.floor(Math.random() * colors.length)],
                        dimensions: {
                            x: Math.random() * 10 + 5,
                            y: Math.random() * 10 + 5
                        },
                        position: {
                            x: Math.random() * canvas.width,
                            y: -10
                        },
                        rotation: Math.random() * 2 * Math.PI,
                        scale: {
                            x: 1,
                            y: 1
                        },
                        velocity: {
                            x: Math.random() * 10 - 5,
                            y: Math.random() * 5 + 5
                        }
                    });
                }
                
                let animationId;
                
                function update() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    
                    confetti.forEach((confetto, index) => {
                        let width = confetto.dimensions.x * confetto.scale.x;
                        let height = confetto.dimensions.y * confetto.scale.y;
                        
                        // Apply forces to velocity
                        confetto.velocity.x -= confetto.velocity.x * drag;
                        confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
                        
                        // Update position
                        confetto.position.x += confetto.velocity.x;
                        confetto.position.y += confetto.velocity.y;
                        
                        // Delete confetti when out of view
                        if (confetto.position.y >= canvas.height) {
                            confetti.splice(index, 1);
                            return;
                        }
                        
                        // Draw confetti
                        ctx.save();
                        ctx.translate(confetto.position.x, confetto.position.y);
                        ctx.rotate(confetto.rotation);
                        
                        ctx.fillStyle = confetto.color.front;
                        ctx.fillRect(-width / 2, -height / 2, width, height);
                        
                        ctx.restore();
                    });
                    
                    if (confetti.length > 0) {
                        animationId = requestAnimationFrame(update);
                    } else {
                        cancelAnimationFrame(animationId);
                        canvas.style.display = 'none';
                    }
                }
                
                update();
            }
        }
        
        // Typing sound effect
        function initTypingSound() {
            const typingElement = document.getElementById('typing-text');
            if (!typingElement) return;
            
            // Create audio context
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            const audioCtx = new AudioContext();
            
            // Create typing sound
            function playTypingSound() {
                if (audioCtx.state === 'suspended') {
                    audioCtx.resume();
                }
                
                const oscillator = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();
                
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
                gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.1);
                
                oscillator.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                
                oscillator.start();
                oscillator.stop(audioCtx.currentTime + 0.1);
            }
            
            // Observe typing text changes
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'characterData' || 
                        (mutation.type === 'childList' && mutation.addedNodes.length > 0)) {
                        playTypingSound();
                    }
                });
            });
            
            observer.observe(typingElement, { 
                characterData: true, 
                childList: true, 
                subtree: true 
            });
        }
        
        // Add fade-in class to important elements
        document.querySelectorAll('.section-title, .skill-card, .project-card, .about-content, .contact-card').forEach(el => {
            el.classList.add('fade-in');
        });
        
        // Add bounce animation to CTA buttons
        const ctaButtons = document.querySelectorAll('.hero-btns .btn');
        ctaButtons.forEach(btn => {
            btn.classList.add('bounce');
        });
        
        // Add pulse animation to theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.classList.add('pulse');
        }
