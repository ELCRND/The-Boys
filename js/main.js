const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu");
const sliderRow = document.querySelector(".characters__row");
const container = document.querySelector(".about__container");
const togglerBtns = document.querySelectorAll(".toggler__btn");
const code = document.querySelector(".token__code");
const tooltip = document.querySelector(".tooltip");
const schedule = document.querySelector(".schedule__list");

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
document.querySelector(".token__copy").addEventListener("click", () => {
  navigator.clipboard.writeText(code.innerText);
  tooltip.classList.add("visible");
  setTimeout(() => tooltip.classList.remove("visible"), 600);
});

// переключение персонажей
let currentCharacter = 0;

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

window.addEventListener("resize", (e) => {
  sliderRow.style.translate = `-${
    container.offsetWidth * currentCharacter
  }px 0`;
});

// пролистывание в блоке Roadmap
let step = 1;
let offset = 0;
const gap = +window.getComputedStyle(schedule).gap.replaceAll(/[a-z]/g, "");

document.querySelector("#up").addEventListener("click", () => {
  if (offset == 0) return;

  offset -= schedule.firstElementChild.offsetHeight + gap;
  schedule.style.translate = `0 -${offset}px`;

  step -= 1;
});

document.querySelector("#down").addEventListener("click", () => {
  if (step >= schedule.childElementCount) return;

  offset += schedule.firstElementChild.offsetHeight + gap;
  schedule.style.translate = `0 -${offset}px`;

  step += 1;
});
