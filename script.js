document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    // Efecto de aparición suave
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateX(-20px)';
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'translateX(20px)';

    setTimeout(() => {
        heroContent.style.transition = 'all 1s ease-out';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateX(0)';
        
        heroImage.style.transition = 'all 1s ease-out';
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateX(0)';
    }, 100);
});
