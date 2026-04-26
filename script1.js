document.addEventListener('DOMContentLoaded', () => {
    // 1. Sticky Header
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Simple Mobile Menu Toggle
    // In a real app, you'd probably toggle a specific mobile menu container.
    // For this simple page, we'll just log or you could expand this.
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    mobileMenuBtn.addEventListener('click', () => {
        alert('Mobile menu clicked! You can add a sliding menu here.');
        // Example implementation:
        // document.querySelector('.nav-links').classList.toggle('active');
    });

    // 3. Form Submission Simulation
    const ctaForm = document.getElementById('cta-form');
    const formMessage = document.getElementById('form-message');

    if (ctaForm) {
        ctaForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            const emailInput = document.getElementById('email').value;
            
            if (emailInput) {
                formMessage.textContent = 'Thank you for subscribing! We will be in touch.';
                formMessage.style.color = '#a7f3d0'; // Light green for success
                ctaForm.reset(); // Clear the input
                
                // Clear message after 3 seconds
                setTimeout(() => {
                    formMessage.textContent = '';
                }, 3000);
            }
        });
    }

    // 4. Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
