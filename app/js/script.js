const body = document.documentElement;
function applyTheme(theme) {
    body.setAttribute('data-theme', theme);
    const inputToSelect = document.getElementById(theme);
    if (inputToSelect) {
        inputToSelect.checked = true;
    }
}
function setTheme(theme) {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
}
function getSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}
function initializeTheme() {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        applyTheme(storedTheme);
    } else {
        const systemTheme = getSystemTheme();
        applyTheme(systemTheme);
    }
}
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
        }
    });
}
initializeTheme();
document.addEventListener('DOMContentLoaded', function() {
    const fieldset = document.querySelector('.toggle');
    if (fieldset) {
        fieldset.addEventListener('change', function(event) {
            if (event.target.type === 'radio' && event.target.name === 'theme-preference') {
                const selectedTheme = event.target.value;
                setTheme(selectedTheme);
            }
        });
    }
    const storedTheme = localStorage.getItem('theme');
    const currentTheme = storedTheme || getSystemTheme();
    applyTheme(currentTheme);
});
