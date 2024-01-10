document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const togglerThemes = document.getElementById('togglerThemes');

    togglerThemes.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        body.classList.toggle('light-theme');
    });
});