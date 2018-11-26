var errText = document.getElementById("error");
var comma = document.getElementById("comma");
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

        playAnim();
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

function playAnim() {
    comma.classList.remove("anim");

    void comma.offsetWidth;

    comma.classList.add("anim");
}

errText.style.visibility = 'hidden';