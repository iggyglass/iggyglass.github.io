var errText = document.getElementById("error");

function copy() {
    try {
        var el = document.createElement("textarea");
        el.value = '\u037e';

        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        errText.style.visibility = 'hidden';
    }
    catch (e) {
        errText.style.visibility = 'visible';
    }
}

errText.style.visibility = 'hidden';