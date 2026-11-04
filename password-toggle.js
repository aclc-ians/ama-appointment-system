document.querySelectorAll('.password-toggle[aria-controls]').forEach(function (toggle) {
    const password = document.getElementById(toggle.getAttribute('aria-controls'));
    const icon = toggle.querySelector('i');

    if (!password || !password.matches('input[data-password-toggle]') || !icon) {
        return;
    }

    toggle.addEventListener('click', function () {
        const isVisible = password.type === 'text';
        password.type = isVisible ? 'password' : 'text';
        toggle.setAttribute('aria-pressed', String(!isVisible));
        toggle.setAttribute('aria-label', isVisible ? 'Show password' : 'Hide password');
        icon.classList.toggle('fa-eye', isVisible);
        icon.classList.toggle('fa-eye-slash', !isVisible);
    });
});
