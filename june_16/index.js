window.onload = function() {

    var blank = document.getElementById("blank");
    blank.addEventListener("keydown", function (e) {
        if (e.keyCode===13) {  //checks whether the pressed key is "Enter"
            validate(e);
        }
    });

    function validate(e) {
        var text = e.target.value;
        if(text.toLowerCase() === "tulips") {
            document.getElementById('blank').readOnly = true;
            document.getElementById("blank").style.border="1px solid green";
            document.getElementById("img_here").src="/Volumes/workplace/test/june_16/tulips.jpeg";
            startConfetti();
        } else {
            document.getElementById("blank").style.border="1px solid red";
        }
        //validation of the input...
    }
}