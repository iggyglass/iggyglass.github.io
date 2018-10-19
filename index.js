var errText = document.getElementById("error");
var cb = new ClipboardJS('.btn');

cb.on('success', function(e)
{
    errText.style.visibility = "hidden";
});

cb.on('error', function(e)
{
    errText.style.visibility = "visible";
});

if (!ClipboardJS.isSupported())
{
    errText.style.visibility = "visible";
}
else
{
    errText.style.visibility = "hidden";
}