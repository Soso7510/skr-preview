// ===========================
// Opening Hours Status Module
// ===========================

function checkOpeningHours() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours * 60 + minutes;
    
    // Restaurant hours: 10:00 - 22:00 (10am - 10pm)
    const openingTime = 10 * 60; // 10:00 in minutes
    const closingTime = 22 * 60; // 22:00 in minutes
    
    const banner = document.getElementById('openingBanner');
    const statusText = document.getElementById('statusText');
    const statusIndicator = document.getElementById('statusIndicator');
    
    if (currentTime >= openingTime && currentTime < closingTime) {
        // Restaurant is open
        banner.classList.remove('closed');
        statusText.innerHTML = '<strong>Ouvert maintenant</strong> - Ferme à 22h';
        statusIndicator.style.backgroundColor = '#2ecc71';
    } else {
        // Restaurant is closed
        banner.classList.add('closed');
        if (currentTime >= closingTime) {
            statusText.innerHTML = '<strong>Fermé</strong> - Ouvre demain à 10h';
        } else {
            statusText.innerHTML = '<strong>Fermé</strong> - Ouvre à 10h';
        }
        statusIndicator.style.backgroundColor = '#e74c3c';
    }
}

// ===========================
// Smooth Scrolling for Navigation Links
// ===========================

function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const bannerHeight = document.getElementById('openingBanner').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight - bannerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navbarCollapse = document.getElementById('navbarNav');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarCollapse.classList.remove('show');
                    }
                }
            }
        });
    });
}

// ===========================
// Active Navigation Link Highlighting
// ===========================

function setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===========================
// Navbar Shadow on Scroll
// ===========================

function setupNavbarShadow() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        }
    });
}

// ===========================
// Animate Elements on Scroll
// ===========================

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const elementsToAnimate = document.querySelectorAll('.feature-card, .menu-card, .contact-card, .about-image-wrapper');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ===========================
// Menu Card Hover Effect Enhancement
// ===========================

function setupMenuCardEffects() {
    const menuCards = document.querySelectorAll('.menu-card');
    
    menuCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===========================
// Phone Number Click Analytics (Optional)
// ===========================

function setupPhoneTracking() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Phone number clicked');
            // Add analytics tracking here if needed
        });
    });
}

// ===========================
// TikTok Link Tracking (Optional)
// ===========================

function setupSocialTracking() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Social media link clicked:', this.href);
            // Add analytics tracking here if needed
        });
    });
}

// ===========================
// Back to Top Button (Optional Enhancement)
// ===========================

function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #b95136, #a03d28);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.style.display = 'flex';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
        this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.3)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
    });
}

// ===========================
// Update Opening Hours Every Minute
// ===========================

function startOpeningHoursUpdate() {
    checkOpeningHours();
    // Update every minute
    setInterval(checkOpeningHours, 60000);
}

// ===========================
// Loading Animation
// ===========================

function handlePageLoad() {
    // Add a small delay to ensure smooth initial rendering
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}

// ===========================
// Initialize All Functions
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Core functionality
    startOpeningHoursUpdate();
    setupSmoothScrolling();
    setupActiveNavigation();
    setupNavbarShadow();
    
    // Visual enhancements
    setupScrollAnimations();
    setupMenuCardEffects();
    createBackToTopButton();
    
    // Analytics/tracking
    setupPhoneTracking();
    setupSocialTracking();
    
    // Page load handling
    handlePageLoad();
    
    console.log('Super Kaboul Restaurant website loaded successfully! 🍽️');
});

// ===========================
// Window Load Event
// ===========================

window.addEventListener('load', function() {
    // Ensure all images are loaded before final animations
    document.querySelectorAll('img').forEach(img => {
        if (!img.complete) {
            img.addEventListener('load', function() {
                console.log('Image loaded:', this.src);
            });
        }
    });
});

// ===========================
// Responsive Menu Close on Resize
// ===========================

window.addEventListener('resize', function() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (window.innerWidth > 991 && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
});
