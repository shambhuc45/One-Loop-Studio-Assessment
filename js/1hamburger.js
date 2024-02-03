document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  const mainList = document.querySelector(".navigation__bar--mainlist");

  mobileMenu.addEventListener("click", function () {
    mainList.classList.toggle("show");
  });
});
