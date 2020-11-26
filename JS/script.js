import ScrollSuave from "./modules/scroll-suave.js";
import initScrollAnimation from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdown from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initScrollAnimation();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdown();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
