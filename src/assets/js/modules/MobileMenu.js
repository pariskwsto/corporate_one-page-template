const header = document.querySelector(".header");
const menuIcon = document.querySelector(".header__menu-icon");
const menuContent = document.querySelector(".header__menu-content");
const largeHeroBtn = document.querySelector(
  ".large-hero__text-container .get-in-touch"
);

class MobileMenu {
  constructor() {
    this.header = header;
    this.menuIcon = menuIcon;
    this.menuContent = menuContent;
    this.largeHeroBtn = largeHeroBtn;
    this.events();
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleMenu());
  }

  toggleMenu() {
    this.header.classList.toggle("expanded");
    this.menuIcon.classList.toggle("close-menu");
    this.menuContent.classList.toggle("visible");
    this.largeHeroBtn.classList.toggle("large-hero__hidden-btn");
  }
}

export default MobileMenu;
