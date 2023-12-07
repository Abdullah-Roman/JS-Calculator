let btn = document.querySelectorAll(".btn");

btn.forEach((element) => {
  element.addEventListener("click", () => {
    btn.classList.toggle("shadow");
  });
});
