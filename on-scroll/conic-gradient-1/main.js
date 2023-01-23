window.addEventListener('scroll', () => {
    let offset = window.pageYOffset;
    document.documentElement.style.setProperty('--rotate', offset * 0.3 + 5 + 'deg');
});
