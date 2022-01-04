var slideIndex = 0;
ShowSlides();


function ShowSlides(){
  var i = 0;
  var slides = document.getElementsByClassName("slide");

  while(i < slides.length)
  {
    slides[i].style.display = "none"
    i++
  } 

  slideIndex++;
  if (slideIndex == 1 || slideIndex > slides.length) document.getElementById('first-slide').style.display = "block";

  else if (slideIndex > 1 && slideIndex < slides.length) slides[slideIndex-1].style.display = "block"

 else if (slideIndex == slides.length) {
    document.getElementById('last-slide').style.display = "block";
    slideIndex=0;
    }  

  setTimeout(ShowSlides,3000);

}
