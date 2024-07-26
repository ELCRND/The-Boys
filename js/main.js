const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu");
// const code = document.querySelector(".token__code");
// const tooltip = document.querySelector(".tooltip");

// открыть/закрыть меню
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("visible");
  menuBtn.classList.toggle("close");
  document.body.classList.toggle("scroll-off");
});

// закрытие меню при нажатии на ссылку
document.querySelectorAll(".menu__link").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("visible");
    menuBtn.classList.remove("close");
    document.body.classList.remove("scroll-off");
  })
);

// копирование кода в буфер обмена
// document.querySelector(".token__copy").addEventListener("click", () => {
//   navigator.clipboard.writeText(code.innerText);
//   tooltip.classList.add("visible");
//   setTimeout(() => tooltip.classList.remove("visible"), 600);
// });

const sliderRow = document.querySelector(".characters__row");
const container = document.querySelector(".about__container");

let currentCharacter = 0;

const togglerBtns = document.querySelectorAll(".toggler__btn");

togglerBtns.forEach((toggleBtn) => {
  toggleBtn.addEventListener("click", (e) => {
    const value = toggleBtn.getAttribute("data-value");
    if (value == currentCharacter) return;
    currentCharacter = value;

    togglerBtns.forEach((btn) => btn.parentNode.classList.remove("active"));
    e.currentTarget.parentNode.classList.add("active");

    sliderRow.classList.remove("move");
    sliderRow.style.translate = `-${container.offsetWidth * value}px 0`;
    sliderRow.classList.add("move");
  });
});
