import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import initDropdown from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import FetchBitcoin from "./modules/fetch-bitcoin.js";
import initFuncionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetch-animais.js";
import ScrollAnimation from "./modules/scroll-animacao.js";
import { SlideNav } from "./modules/slide.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]'
);
modal.init();

const ToolTip = new Tooltip("[data-tooltip]");
ToolTip.init();

fetchAnimais("./animaisApi.json", ".numeros-grid");

FetchBitcoin("https://blockchain.info/ticker", ".btc-preco");

const scrollAnimation = new ScrollAnimation('[data-anime="scroll"]');
scrollAnimation.init();

const slide = new SlideNav(".slide", ".wrapper");
slide.init();

slide.addControl(".custom-controls");

initDropdown();
initMenuMobile();
initFuncionamento();
