//Animation
anime({
    targets: 'form',
    translateY: ['-100%', '0%'],
    opacity: [0, 1],
    duration: 1500
});


// Focus Input
window.addEventListener('load', function () {
    const formInputs = document.querySelectorAll('.form input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.style.transform = 'scale(1.03)';
        });
        input.addEventListener('blur', function () {
            this.style.transform = 'scale(1)';
        });
    });
});