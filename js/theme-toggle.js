/*
* Tinman.css | v2.0.0 | MIT | 2026
* Copyright 2026, Selwyn Orren @ Linuxweb
* Free to use under the MIT license.
* https://opensource.org/licenses/MIT
* Based on Skeleton, Copyright 2011-2014 Dave Gamache, MIT
*/

/* Light / dark toggle. A button with the class theme-toggle switches between
   light and dark, shows a moon in light mode and a sun in dark mode, and
   remembers the choice. With no saved choice the page follows the visitor's
   operating system setting. Needs jQuery. Optional: it is not part of the grid
   or application.js, load it only on pages that have the button.

   Also put this one line in the <head> so a saved choice applies before the
   page paints and there is no flash of the wrong theme:
   <script>try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t);}catch(e){}</script>
*/
$(function(){
    var $root = $('html');
    var $toggle = $('.theme-toggle');
    var osDark = window.matchMedia('(prefers-color-scheme: dark)');

    function isDark() {
        var theme = $root.attr('data-theme');
        return theme ? theme === 'dark' : osDark.matches;
    }

    function paintToggle(dark) {
        $toggle
            .attr('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode')
            .find('i').attr('class', dark ? 'fa fa-sun-o' : 'fa fa-moon-o');
    }

    $toggle.on('click', function(){
        var theme = isDark() ? 'light' : 'dark';
        $root.attr('data-theme', theme);
        try { localStorage.setItem('theme', theme); } catch (e) {}
        paintToggle(theme === 'dark');
    });

    /* Follow the operating system if it changes while the page is open. A plain
       addEventListener, because jQuery cannot bind to a MediaQueryList. */
    osDark.addEventListener('change', function(){ paintToggle(isDark()); });
    paintToggle(isDark());
});
