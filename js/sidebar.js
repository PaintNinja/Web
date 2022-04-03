/*
 Implementation for sidebars used on the Forge sites.
 */
$(document).ready(function () {
    $('.collapsible,.nav-collapsible').each(function () {
        var item = $(this);
        // var toggle = item.parent().find('> .toggle-collapsible');
        var toggle = item.parent().find('.toggle-collapsible');
        var showText = item.data('show-text') ? item.data('show-text') : 'Show';
        var hideText = item.data('hide-text') ? item.data('hide-text') : 'Hide';
        var toggleStyle = item.data('toggle-style') ? item.data('toggle-style') : 'display';
        var isCollapsed = function () {
            return toggleStyle == 'class' ? item.hasClass('collapsed') : item.css('display') == 'none';
        };
        var changeState = function (state) {
            if (toggleStyle == 'class') {
                if (state) {
                    item.removeClass('collapsed');
                    item.addClass('expanded');
                } else {
                    item.removeClass('expanded');
                    item.addClass('collapsed');
                }
            } else {
                item.css('display', state ? 'block' : 'none');
            }
        };
        if (!item.hasClass('nav-collapsible-open')) {
            changeState(false);
        } else {
            changeState(true);
            // var icons = toggle.find('> .collapsible-icon');
            // var texts = toggle.find('> .collapsible-text');
            var icons = toggle.find('.collapsible-icon');
            var texts = toggle.find('.collapsible-text');
            icons.removeClass('fa-plus');
            icons.addClass('fa-minus');
            texts.html(showText);
        }
        // toggle.click(function (e) {
        toggle.on('click', function(e) {
            // var icon = toggle.find('> .collapsible-icon');
            // var text = toggle.find('> .collapsible-text');
            var icon = toggle.find('.collapsible-icon');
            var text = toggle.find('.collapsible-text');
            if (isCollapsed()) {
                changeState(true);
                icon.addClass('fa-minus');
                icon.removeClass('fa-plus');
                text.html(hideText);
            } else {
                changeState(false);
                icon.addClass('fa-plus');
                icon.removeClass('fa-minus');
                text.html(showText);
            }
            e.preventDefault();
        });
    });
});

docReady(function() {
    document.querySelector(".open-sidebar").onclick = function(e) {
        document.querySelector('.sidebar-sticky').classList.add('active-sidebar')
        document.body.classList.add('sidebar-active')
        e.preventDefault()
    }
    document.querySelector(".close-sidebar").onclick = function(e) {
        document.querySelector('.sidebar-sticky').classList.remove('active-sidebar')
        document.body.classList.remove('sidebar-active')
        e.preventDefault()
    }
})