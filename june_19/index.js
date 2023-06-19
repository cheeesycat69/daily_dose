window.onload = function() {

    var blank = document.getElementById("blank");
    blank.addEventListener("keydown", function (e) {
        if (e.keyCode===13) {  //checks whether the pressed key is "Enter"
            validate(e);
        }
    });

    function validate(e) {
        var text = e.target.value;
        if(text.toLowerCase() === "belong") {
            document.getElementById('blank').readOnly = true;
            document.getElementById("blank").style.border="1px solid green";
            document.getElementById("line").style.visibility="hidden";
            document.getElementById("lyrics").style.display="block";
            document.getElementById("img_here").src="/Volumes/workplace/test/june_19/belong.jpeg";
            document.getElementById("video").src="https://www.youtube.com/embed/9IzKueQ2ZxY?autoplay=1";
            document.getElementById("video_container").style.display="block";
            document.getElementById("video_heading").innerHTML="<h1>Make You Feel My Love</h1>";
            // startConfetti();
        } else {
            document.getElementById("blank").style.border="1px solid red";
        }
        //validation of the input...
    }
}