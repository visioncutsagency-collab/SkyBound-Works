/<script>
    // 1. Initial Load for Icons
    document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
    });

    // 2. Mobile Menu Logic
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIconContainer = document.getElementById('menu-icon-container');

    function toggleMenu() {
        const isActive = mobileMenu.classList.toggle('active');
        
        // Icon change logic (Menu to X)
        if (isActive) {
            menuIconContainer.innerHTML = '<i data-lucide="x" class="w-6 h-6"></i>';
            document.body.style.overflow = 'hidden'; // Scroll disable on mobile
        } else {
            menuIconContainer.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
            document.body.style.overflow = ''; // Scroll enable
        }
        
        // Refresh icons after innerHTML change
        lucide.createIcons();
    }

    menuToggle.addEventListener('click', toggleMenu);

    // 3. Close Menu on Link Click (Smooth scroll integration)
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuIconContainer.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
            document.body.style.overflow = '';
            lucide.createIcons();
        });
    });

    // 4. Responsive Auto-Fix
    // Agar screen size change ho (Desktop to Mobile), toh icons reset honge
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
            lucide.createIcons();
        }
    });
</script>