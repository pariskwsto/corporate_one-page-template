import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

const serviceItemEls = document.querySelectorAll(".service-item");
const testimonialEls = document.querySelectorAll(".testimonial");

new MobileMenu();
new RevealOnScroll(serviceItemEls, 0.7);
new RevealOnScroll(testimonialEls, 0.6);
