import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.siteHeader = $(".header");
    this.menuIcon = $(".header__menu-icon");
    this.menuContent = $(".header__menu-content");
    this.heroBtn = $(".large-hero__text-content .btn");
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleMenu.bind(this));
  }

  toggleMenu() {
    this.menuContent.toggleClass("visible");
    this.siteHeader.toggleClass("expanded");
    this.menuIcon.toggleClass('close-menu');
    this.heroBtn.toggleClass('mb-hidden');
  }
}

export default MobileMenu;
