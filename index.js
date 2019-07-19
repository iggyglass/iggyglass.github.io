var errText = document.getElementById("error");
var comma = document.getElementById("comma");
var copyEl = document.getElementById("copy");

var presses = 0;
var canPlay = true;
var cHeld = false;
var spaceHeld = false;
var timer;

function onCopy() {
    if (!canPlay || window.getSelection().toString() == "") return;

    if (cHeld) {
        playAnim();
        canPlay = false;
    } else {
        playAnim();
    }
}

function playAnim() {
    comma.classList.remove("anim");

    void comma.offsetWidth;

    comma.classList.add("anim");
}

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
    if (e.keyCode == 67) { // C
        cHeld = true;
    } else if (e.keyCode == 32 && !spaceHeld) { // Space
        presses++;
        spaceHeld = true;
        timer = setTimeout(function() { presses = 0; }, 200);

        if (presses >= 2) {
            copy();
            clearTimeout(timer);
            presses = 0;
        }
    }
});

document.addEventListener('keyup', function(e) {
    if (e.keyCode == 32) { // Space
        spaceHeld = false;
    } else if (e.keyCode == 67) { // C
        canPlay = true;
        cHeld = false;
    }
});

copyEl.addEventListener('click', function(e) {
    e.preventDefault();
    copy();
});

errText.style.visibility = 'hidden';