window.onload = function() {

    var blank = document.getElementById("blank");
    blank.addEventListener("keydown", function (e) {
        if (e.keyCode===13) {  //checks whether the pressed key is "Enter"
            validate(e);
        }
    });
    function runConfetti() {
        var end = Date.now() + (120 * 1000);
        var colors = ['#bb0000', '#ffffff'];

        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    function validate(e) {
        var text = e.target.value;
        if(text.toLowerCase() === "way you are") {
            runConfetti();

            document.getElementById('blank').readOnly = true;
            document.getElementById("blank").style.border="1px solid green";
            document.getElementById("line").style.display="none";
            document.getElementById("lyrics").style.display="block";
            document.getElementById("img_here").src="/Volumes/workplace/test/june_22/youare.gif";
            document.getElementById("video").src="https://www.youtube.com/embed/LjhCEhWiKXk?autoplay=1";
            document.getElementById("video_container").style.display="block";
            document.getElementById("video_heading").innerHTML="<h1>Bruno Mars - Just The Way You Are</h1>";
        } else {
            document.getElementById("blank").style.border="1px solid red";
        }
        //validation of the input...
    }
}