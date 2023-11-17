var headerabc = document.getElementById("abc");
      window.addEventListener("scroll", function () {
        headerabc.style.opacity = 1.1 - +window.pageYOffset / 550 + "";
        headerabc.style.top = +window.pageYOffset + "px";
        headerabc.style.backgroundPositionY = +window.pageYOffset + "px";
      });