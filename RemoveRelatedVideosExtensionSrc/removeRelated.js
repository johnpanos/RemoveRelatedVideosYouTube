function removeRelated() {
    if (document.title.indexOf("YouTube") != -1) {
        main = document.getElementById('main');
        main.removeChild(document.getElementById('related'));
    }
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        removeRelated();
    }
};