var errText = document.getElementById("error");
var presses = 0;
var timer;

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

document.addEventListener('keydown', function(e) {
    if (e.keyCode == 32) {
        presses++;
        timer = setTimeout(function() { presses = 0; }, 200);
    }

    if (presses >= 2) {
        copy();
        clearTimeout(timer);
        presses = 0;
    }
});

errText.style.visibility = 'hidden';