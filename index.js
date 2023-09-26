
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("header").style.background = "#fff";
  } else {
    document.getElementById("header").style.background = "";
  }
}


