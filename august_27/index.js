window.onload = function() {

    var blank = document.getElementById("blank");
    blank.addEventListener("keydown", function (e) {
        if (e.keyCode===13) {  //checks whether the pressed key is "Enter"
            validate(e);
        }
    });
    var blank2 = document.getElementById("blank2");
    blank2.addEventListener("keydown", function (e) {
        if (e.keyCode===13) {  //checks whether the pressed key is "Enter"
            validate2(e);
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
        if(text.toLowerCase().trim() === "havana") {

            // hide question
            document.getElementById("second_question").style.display="block";
            document.getElementById("lyrics").style.display="block";
            document.getElementById("video").src="https://www.youtube.com/embed/HCjNJDNzw8Y?si=u6gJblH6NhslmixM?autoplay=1";
            document.getElementById("video_container").style.display="block";
            document.getElementById("video_heading").innerHTML="<h1>Jay Sean - Down ft. Lil Wayne</h1>";
            document.getElementById("first_question").style.display="none";
            document.getElementById("blank_2").style.display="block"

        } else {
            document.getElementById("blank").style.border="1px solid red";
        }
    }
    function validate2(e) {
        var text = e.target.value;
        if(text.toLowerCase().trim() === "peaches") {
            console.log("ANISHCB HERE")
            document.getElementById("second_question").style.display="none";
            // remove button
            document.getElementById("img_here").src="https://raw.githubusercontent.com/cheesycat69/daily_dose/main/july_10/peaches.jpeg";
            runConfetti();


            // hide question

        } else {
            document.getElementById("blank").style.border="1px solid red";
        }
    }
}
