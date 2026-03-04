/**
 * SkyBound Works - Optimized Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    const initIcons = () => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    };
    initIcons();

    // 2. Mobile Menu System
    const menuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isActive = mobileMenu.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.setAttribute('data-lucide', isActive ? 'x' : 'menu');
                initIcons();
            }
            body.style.overflow = isActive ? 'hidden' : '';
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                body.style.overflow = '';
                const icon = menuBtn.querySelector('i');
                if (icon) {
                    icon.setAttribute('data-lucide', 'menu');
                    initIcons();
                }
            });
        });
    }

    // 3. Scroll Reveal Animation (UI Cards ko wapis chalane ke liye)
    const observerOptions = {
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .glass-card, .work-card').forEach(el => {
        el.classList.add('reveal'); 
        revealObserver.observe(el);
    });

    // 4. Navbar Background Change
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-[#0f0a1f]/95', 'backdrop-blur-xl', 'shadow-2xl');
        } else {
            navbar.classList.remove('bg-[#0f0a1f]/95', 'backdrop-blur-xl', 'shadow-2xl');
        }
    }, { passive: true });
});