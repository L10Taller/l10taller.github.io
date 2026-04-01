document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.hero-text, .hero-visual');
    
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.8s ease-out';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 * (index + 1));
    });
});
