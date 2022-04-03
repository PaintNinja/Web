// A lightweight jQuery $(document).ready alternative written in plain JS
function docReady(fn) {
    if (document.readyState != 'loading') fn()
    else document.addEventListener('DOMContentLoaded', fn)
}