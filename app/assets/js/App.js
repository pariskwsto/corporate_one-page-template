import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import RevealOnScroll from './modules/RevealOnScroll';
import Modal from './modules/Modal';

new MobileMenu();
new StickyHeader();
new RevealOnScroll($(".service-item"), "90%");
new RevealOnScroll($(".testimonial"), "70%");
new Modal();
