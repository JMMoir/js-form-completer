javascript: (function() {
    var el = document.getElementsByTagName('input');
    for (var i =0; i < el.length; i++){
        if (el[i].type == 'checkbox' || el[i].type == 'radio')
            el[i].checked = true;
    }
    var dd = document.getElementsByTagName('select');
    for (var i = 0; i < dd.length; i++){
        dd[i].selectedIndex = 1;
    }
})();