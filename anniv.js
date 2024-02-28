let slideIndex = 0;
    showSlides();

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides() {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        if (slideIndex >= slides.length) {slideIndex = 0}
        if (slideIndex < 0) {slideIndex = slides.length - 1}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";

        // Typewriter effect
        const message = slides[slideIndex].getElementsByClassName("slide-message")[0];
        const text = message.innerHTML;
        message.innerHTML = "";
        let charIndex = 0;
        function typeWriter() {
            if (charIndex < text.length) {
                message.innerHTML += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 50); // Adjust typing speed here
            }
        }
        typeWriter();
    }