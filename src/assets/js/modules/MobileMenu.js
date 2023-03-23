class MobileMenu {
  constructor() {
    this.header = document.querySelector(".header");
    this.menuIcon = document.querySelector(".header__menu-icon");
    this.menuContent = document.querySelector(".header__menu-content");
    this.largeHeroBtn = document.querySelector(
      ".large-hero__text-container .get-in-touch"
    );

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
