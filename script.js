// Optional: Simple scroll reveal script that gives the pixel frames a dynamic feel
document.addEventListener("DOMContentLoaded", () => {
    // Reveal animated items on intersection
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply to main structural components
    const animatedElements = document.querySelectorAll('.hero-content, .work-frame, .palette-frame, .section-title');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(40px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });

    // Add CRT flicker effect occasionally for extra retro detail
    const crtOverlay = document.querySelector('.crt-overlay');
    
    setInterval(() => {
        if(Math.random() > 0.95) { // 5% chance every interval to flicker
            crtOverlay.style.opacity = '0.9';
            setTimeout(() => {
                crtOverlay.style.opacity = '0.8';
            }, 100);
        }
    }, 2000);
});
