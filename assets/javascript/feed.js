document.addEventListener("DOMContentLoaded", function() {
    var stars = document.querySelectorAll(".star");
    var selectedStars = document.querySelectorAll(".selected");
  
    stars.forEach(function(star) {
      star.addEventListener("click", function() {
        selectedStars.forEach(function(selectedStar) {
          selectedStar.classList.remove("selected");
        });
        star.classList.add("selected");
      });
    });
  });

  function info(){
    window.open("https://epicode.com/");
    
}


