/**
 * SkyBound Works - Final Script
 * No Menu Button | Full Responsive | Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Icons (Lucide)
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Scroll Reveal: Elements ko scroll par zahir karna
    const revealOnScroll = () => {
        const elements = document.querySelectorAll('section, .glass-card, .work-card');
        
        elements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const revealPoint = 120; // Kitne pixels scroll par animate ho
            
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll); // Page load hote hi check karein

    // 3. Navbar Sticky Effect: Scroll par color change
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            // Jab user scroll karega tab shadow aur dark background aayega
            navbar.style.background = "rgba(15, 10, 31, 0.95)";
            navbar.style.backdropFilter = "blur(10px)";
            navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
        } else {
            // Shuru mein navbar transparent rahega
            navbar.style.background = "transparent";
            navbar.style.boxShadow = "none";
        }
    });

    // 4. Smooth Scrolling: Links par click karne se page smoothly move ho
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
