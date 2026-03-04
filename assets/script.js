/**
 * SkyBound Works - Interactive Scripts
 * Handles: Mobile Menu, Scroll Reveal, and Navbar Effects
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Mobile Menu System
    const menuBtn = document.querySelector('[data-lucide="menu"]');
    
    // Create Mobile Menu Overlay Dynamically
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'fixed inset-0 bg-[#0f0a1f] z-[60] flex flex-col items-center justify-center gap-8 text-2xl font-bold uppercase tracking-widest translate-x-full transition-transform duration-500';
    mobileMenu.innerHTML = `
        <div class="absolute top-6 right-6 cursor-pointer" id="close-menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
        <a href="#home" class="menu-item hover:text-fuchsia-400 transition">Home</a>
        <a href="#services" class="menu-item hover:text-fuchsia-400 transition">Services</a>
        <a href="#work" class="menu-item hover:text-fuchsia-400 transition">Work</a>
        <a href="#pricing" class="menu-item hover:text-fuchsia-400 transition">Pricing</a>
        <a href="#faq" class="menu-item hover:text-fuchsia-400 transition">FAQ</a>
    `;
    document.body.appendChild(mobileMenu);

    // Menu Toggle Logic
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
        });
    }

    document.getElementById('close-menu').addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.menu-item').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });
    });

    // 3. Scroll Reveal Animation Logic
    const revealElements = () => {
        const elements = document.querySelectorAll('section, .glass-card, .work-card');
        elements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    // Add 'reveal' class to elements on load
    document.querySelectorAll('section').forEach(s => s.classList.add('reveal'));
    
    window.addEventListener('scroll', revealElements);
    window.addEventListener('load', revealElements);

    // 4. Navbar Background Switch
    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-[#0f0a1f]/95', 'shadow-2xl', 'border-fuchsia-500/10');
        } else {
            navbar.classList.remove('shadow-2xl', 'border-fuchsia-500/10');
        }
    });
});