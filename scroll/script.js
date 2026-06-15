document.addEventListener('DOMContentLoaded', () => {
    const top = document.getElementById('scrollTop');
    const middle = document.getElementById('scrollMiddle');
    const content = middle.querySelector('.scroll-content');

    let isOpen = false;
    let isAnimating = false;

    top.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;

        if (!isOpen) {
            const fullHeight = content.scrollHeight;
            middle.style.height = fullHeight + 'px';
        } else {
            if (middle.style.height === 'auto') {
                middle.style.height = content.scrollHeight + 'px';
            }
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    middle.style.height = '0px';
                });
            });
        }
        isOpen = !isOpen;
    });
    
    middle.addEventListener('transitionend', (e) => {
        if (e.propertyName !== 'height') return;
        if (isOpen) {
            middle.style.height = 'auto';
        }
        isAnimating = false;
    });
});