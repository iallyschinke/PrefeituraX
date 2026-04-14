const toogle = document.querySelector(".menu-toogle");
const menu = document.querySelector("#menu");

toogle.addEventListener("click", () => {
  const expanded = toogle.getAttribute("aria-expanded") === "true";
  toogle.setAttribute("aria-expanded", !expanded);
  menu.classList.toogle("ativo");
});
