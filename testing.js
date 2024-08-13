const buttonTwo = document.querySelector(".button-two");

buttonTwo.addEventListener("click", () => {
  const isOpened = buttonTwo.getAttribute("aria-expanded");
  if (isOpened === "false") {
    buttonTwo.setAttribute("aria-expanded", true);
  } else {
    buttonTwo.setAttribute("aria-expanded", false);
  }
});
