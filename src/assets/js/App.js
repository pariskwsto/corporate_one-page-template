import MobileMenu from "./modules/MobileMenu";
import Modal from "./modules/Modal";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

const serviceItemEls = document.querySelectorAll(".service-item");
const testimonialEls = document.querySelectorAll(".testimonial");

new MobileMenu();
new Modal();
new RevealOnScroll(serviceItemEls, 0.7);
new RevealOnScroll(testimonialEls, 0.6);
new StickyHeader();
