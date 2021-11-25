window.addEventListener('load', () => {

    let slide = 1;

    let slides = document.querySelectorAll(".slider ul li");
    total = slides.length;

    /*Muestra los Slider*/
    showSlide(1);

    next = document.querySelector(".next");
    prev = document.querySelector(".prev")

  
    next.addEventListener('click', (evt) => {
        evt.preventDefault();
        slide++;
        if (slide > total) { slide = 1; }
        showSlide(slide);
    })

  
    prev.addEventListener("click", (evt) => {
        evt.preventDefault();
        slide--;
        if (slide < 1) { slide = total; }
        showSlide(slide);
    })

    function showSlide(n) {
        n--; // decrement 1
        for (i = 0; i < slides.length; i++) {
            (i == n) ? slides[n].style.display = "block" : slides[i].style.display = "none";
        }
    }

})