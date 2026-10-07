/*
* Tinman.css | v2.0.0 | MIT | 2026
* Copyright 2026, Selwyn Orren @ Linuxweb
* Free to use under the MIT license.
* https://opensource.org/licenses/MIT
* Based on Skeleton, Copyright 2011-2014 Dave Gamache, MIT
*/

$(document).ready(function() {

/*jQuery function to remove all size attributed from images*/
jQuery(document).ready(function($){
    $('img').each(function(){
        $(this).removeAttr('width')
        $(this).removeAttr('height');
    });
});

}); // End document Ready Function
