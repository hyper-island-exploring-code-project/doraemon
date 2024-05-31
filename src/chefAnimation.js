let windowHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  ),
  lastTop;

window.addEventListener("scroll", function (event) {
  var animation = document.getElementById("chefMotion"),
    top = animation.getBoundingClientRect().top,
    offset = top - windowHeight;

  if (offset > 0) {
    animation.classList.remove("animation");
    return;
  }

  if (top < windowHeight / 2 && top > lastTop) {
    animation.classList.remove("animation");
  }

  if (animation.className.indexOf("animation") === -1 && top < lastTop) {
    animation.classList.add("animation");
  }

  lastTop = top;
});
