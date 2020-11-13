import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import heroAnimation from './modules/hero-animation';
import fadeinUpOnScroll from './modules/fadein-up-on-scroll';
import toggleMenu from './modules/toggle-menu';
import scrollToElement from './modules/scroll-to-element';
import readMore from './modules/read-more';

heroAnimation();
fadeinUpOnScroll();
toggleMenu();
scrollToElement();
readMore();