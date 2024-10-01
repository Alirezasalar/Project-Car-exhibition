var drop_nav = document.querySelector(".drop-nav");
var navbar_nav = document.querySelector(".navbar-nav");
var idm = document.querySelector("#idm");
drop_nav.addEventListener("click", () => {
  navbar_nav.classList.toggle("show-nav");
  if (navbar_nav.classList.contains("show-nav")) {
    idm.className += "fa fa-close";
  } else {
    idm.className += "fa fa-bars";
  }
});
document.querySelector("#swish").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
