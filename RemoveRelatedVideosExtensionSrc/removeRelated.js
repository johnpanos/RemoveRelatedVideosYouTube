var main = document.getElementById('main');

function checkIfRelatedLoaded() {
    main = document.getElementById('main');
    if (main != null) {
        var related = document.getElementById('related');
        if (related != null) {
            relatedIsLoadedNew();
            clearInterval(timer);
        }
    } else if (document.getElementById('watch7-main') != null) {
        relatedIsLoadedOld();
        clearInterval(timer);
    }
}

function relatedIsLoadedNew() {
    main.removeChild(document.getElementById('related'));
    var ytdWatch = document.getElementsByTagName("ytd-watch")[0];
    ytdWatch.setAttribute("theater-requested_", "");
    ytdWatch.setAttribute("theater", "");

    var info = document.getElementById('info');
    info.style.paddingRight = "0px";

    var meta = document.getElementById('meta');
    meta.style.paddingRight = "0px";
    meta.style.marginLeft = "auto";
    meta.style.marginRight = "auto";
    meta.style.width = "fit-content";

    var commentSection = document.getElementById('comments');
    commentSection.style.paddingRight = "0px";
    commentSection.style.marginLeft = "auto";
    commentSection.style.marginRight = "auto";
    commentSection.style.width = "fit-content";
}

function relatedIsLoadedOld() {
    var main2 = document.getElementById('watch7-main');
    main2.removeChild(document.getElementById('watch7-sidebar'));
}

var timer = setInterval(function(){ checkIfRelatedLoaded() }, 50);