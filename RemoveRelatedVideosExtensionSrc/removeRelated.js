if (document.title.indexOf("YouTube") != -1) {
    var main = document.getElementById('main');
    // Some fixes for old YouTube design
    if (main != undefined) {
        main.removeChild(document.getElementById('related'));
    } else {
        var main2 = document.getElementById('watch7-main');
        main2.removeChild(document.getElementById('watch7-sidebar'));
    }
}