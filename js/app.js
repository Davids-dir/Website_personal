// HIDE Header when ScrollDown
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("mainHeader").style.top = "-100px";
  } else {
    document.getElementById("mainHeader").style.top = "0";
  }
} 