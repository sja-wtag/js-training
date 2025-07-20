window.onload = function() {
    // Animation for login container
    anime({
        targets: '.login-container',
        scale: [0.8, 1],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutBack'
    });

    // Button hover animation
    const button = document.querySelector('.btn-submit');
    button.addEventListener('mouseover', () => {
        anime({
            targets: button,
            scale: 1.05,
            easing: 'easeInOutQuad',
            duration: 200
        });
    });
    button.addEventListener('mouseleave', () => {
        anime({
            targets: button,
            scale: 1,
            easing: 'easeInOutQuad',
            duration: 200
        });
    });
};
