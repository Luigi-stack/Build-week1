document.addEventListener("DOMContentLoaded", function () {
  var stars = document.querySelectorAll(".star");
  stars.forEach(function (star) {
    star.addEventListener("click", function () {
      star.classList.add("selected");
    });
  });
});
