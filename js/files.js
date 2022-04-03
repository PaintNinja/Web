/*
 Implementation for various utilities on the files site.
 */
window.onload = function() {
    if (location.hostname != 'files.minecraftforge.net') {
        var find = 'files.minecraftforge.net'
        var replace = location.hostname
        
        if (location.protocol == 'file:') {
            find = /https?:\/\/files\.minecraftforge\.net/i
            replace = location.pathname.substring(0, location.pathname.indexOf('test/out/') + 'test/out'.length)
        }
        //console.log('Converting hostname from ' + find.toString() + ' to ' + replace)
        
        var elems = document.getElementsByTagName('a')
        for (var i = 0; i < elems.length; i++)
            elems[i]['href'] = elems[i]['href'].replace(find, replace)
    }
};
