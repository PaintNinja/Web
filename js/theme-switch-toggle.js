/*
 Enables switching themes on the fly.
 Initialize by calling window.themeSwitchToggle() in docReady()
 */
window.themeSwitchToggle = function() {
    var toggle = document.querySelector('.theme-switch input');
    toggle.checked = (localStorage.theme === window.forge.THEME_DARK)
    toggle.onchange = function(event) {
        localStorage.theme = event.target.checked ? window.forge.THEME_DARK : window.forge.THEME_LIGHT;
        window.forge.swapThemeCSS(localStorage.theme)
    }
}