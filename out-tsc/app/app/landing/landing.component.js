import { CommonModule, DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, Inject, signal, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function LandingComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 48);
    i0.ɵɵlistener("click", function LandingComponent_a_14_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeMenu()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const isFirst_r4 = ctx.first;
    i0.ɵɵclassProp("nav__link--active", isFirst_r4);
    i0.ɵɵproperty("href", "#" + item_r3.target, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r3.label, " ");
} }
function LandingComponent_article_73_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 49);
    i0.ɵɵelement(1, "img", 50);
    i0.ɵɵelementStart(2, "div", 51)(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "span", 10);
    i0.ɵɵtext(8, "\u2192");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const solution_r5 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", solution_r5.image, i0.ɵɵsanitizeUrl)("alt", solution_r5.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(solution_r5.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(solution_r5.description);
} }
function LandingComponent_article_97_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "article", 52);
    i0.ɵɵelement(1, "span", 53);
    i0.ɵɵelementStart(2, "div")(3, "h3");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "p");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const benefit_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-icon", benefit_r6.icon);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(benefit_r6.title);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(benefit_r6.description);
} }
function LandingComponent_a_128_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "a", 54);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵproperty("href", "#" + item_r7.target, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r7.label);
} }
export class LandingComponent {
    constructor(document, renderer) {
        this.document = document;
        this.renderer = renderer;
        this.isScrolled = signal(false, ...(ngDevMode ? [{ debugName: "isScrolled" }] : /* istanbul ignore next */ []));
        this.isMenuOpen = signal(false, ...(ngDevMode ? [{ debugName: "isMenuOpen" }] : /* istanbul ignore next */ []));
        this.whatsappUrl = 'https://wa.me/5493510000000?text=Hola%20SmartLife%2C%20quiero%20cotizar%20una%20automatizaci%C3%B3n.';
        this.navItems = [
            { label: 'Inicio', target: 'inicio' },
            { label: 'Soluciones', target: 'soluciones' },
            { label: 'Combos', target: 'combos' },
            { label: 'Sobre nosotros', target: 'sobre-nosotros' },
            { label: 'Contacto', target: 'contacto' },
        ];
        this.solutions = [
            {
                title: 'Casa',
                description: 'Seguridad, confort y control total.',
                image: 'assets/images/solution-home.png',
            },
            {
                title: 'Departamento',
                description: 'Automatizá tu día a día sin complicaciones.',
                image: 'assets/images/solution-apartment.png',
            },
            {
                title: 'Negocios',
                description: 'Gestioná tu negocio desde cualquier lugar.',
                image: 'assets/images/solution-business.png',
            },
            {
                title: 'Kioscos',
                description: 'Cierre inteligente y monitoreo 24/7.',
                image: 'assets/images/solution-kiosk.png',
            },
        ];
        this.benefits = [
            {
                icon: 'tool',
                title: 'Instalación profesional',
                description: 'Técnicos especializados.',
            },
            {
                icon: 'gear',
                title: 'Configuración incluida',
                description: 'Dejamos todo listo para usar.',
            },
            {
                icon: 'headset',
                title: 'Soporte personalizado',
                description: 'Te acompañamos siempre.',
            },
            {
                icon: 'shield',
                title: 'Garantía total',
                description: 'Productos y servicio garantizados.',
            },
        ];
        this.updateScrollState();
    }
    onWindowScroll() {
        this.updateScrollState();
    }
    toggleMenu() {
        this.isMenuOpen.update((isOpen) => {
            const nextState = !isOpen;
            this.syncBodyMenuState(nextState);
            return nextState;
        });
    }
    closeMenu() {
        if (!this.isMenuOpen()) {
            return;
        }
        this.isMenuOpen.set(false);
        this.syncBodyMenuState(false);
    }
    updateScrollState() {
        this.isScrolled.set(this.document.defaultView?.scrollY ? this.document.defaultView.scrollY > 12 : false);
    }
    syncBodyMenuState(isOpen) {
        if (isOpen) {
            this.renderer.addClass(this.document.body, 'menu-open');
            return;
        }
        this.renderer.removeClass(this.document.body, 'menu-open');
    }
    static { this.ɵfac = function LandingComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || LandingComponent)(i0.ɵɵdirectiveInject(DOCUMENT), i0.ɵɵdirectiveInject(i0.Renderer2)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LandingComponent, selectors: [["app-landing"]], hostBindings: function LandingComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function LandingComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, i0.ɵɵresolveWindow);
        } }, decls: 135, vars: 13, consts: [[1, "site-header"], ["href", "#inicio", "aria-label", "Ir al inicio", 1, "brand", 3, "click"], ["aria-hidden", "true", 1, "brand__mark"], ["viewBox", "0 0 32 32"], ["d", "M4.5 13.8 16 5l11.5 8.8V27h-7.3v-9.4h-8.4V27H4.5V13.8Z"], ["d", "M12.1 27v-9.4h7.8V27"], [1, "brand__text"], ["aria-label", "Navegaci\u00F3n principal", 1, "nav"], ["class", "nav__link", 3, "nav__link--active", "href", "click", 4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noreferrer", 1, "quote-link", 3, "href"], ["aria-hidden", "true"], ["type", "button", "aria-label", "Abrir men\u00FA", 1, "menu-button", 3, "click"], ["id", "inicio", 1, "hero", "section-anchor"], ["aria-hidden", "true", 1, "hero__image"], ["aria-hidden", "true", 1, "hero__shade"], [1, "hero__content", "page-shell"], [1, "eyebrow"], [1, "hero__lead"], [1, "hero__support"], [1, "hero__actions"], ["target", "_blank", "rel", "noreferrer", 1, "button", "button--primary", 3, "href"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M20.5 11.9a8.4 8.4 0 0 1-12.4 7.4L4 20.5l1.3-4A8.4 8.4 0 1 1 20.5 12Z"], ["d", "M9.7 8.2c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.4 2.6.9 3.1.7 3.7.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4l-1.9-.9c-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6l-.8-2Z"], ["href", "#soluciones", 1, "button", "button--secondary"], ["aria-label", "Tecnolog\u00EDa compatible", 1, "compatibility"], [1, "page-shell", "compatibility__inner"], [1, "compatibility__logos"], ["id", "soluciones", 1, "solutions", "section-anchor", "page-shell"], [1, "section-copy"], [1, "eyebrow", "eyebrow--green"], ["href", "#control", 1, "button", "button--ghost"], [1, "solution-grid"], ["class", "solution-card", 4, "ngFor", "ngForOf"], ["id", "control", 1, "control", "section-anchor", "page-shell"], [1, "control__copy"], ["aria-label", "Funcionalidades principales", 1, "check-list"], ["href", "#contacto", 1, "button", "button--ghost"], ["aria-hidden", "true", 1, "control__visual"], ["id", "combos", "aria-label", "Servicios incluidos", 1, "benefits", "section-anchor", "page-shell"], ["class", "benefit", 4, "ngFor", "ngForOf"], ["id", "contacto", 1, "cta", "section-anchor", "page-shell"], [1, "cta__action"], ["id", "sobre-nosotros", 1, "footer", "section-anchor", "page-shell"], ["href", "#inicio", "aria-label", "Ir al inicio", 1, "brand"], ["aria-label", "Navegaci\u00F3n del footer"], [3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", "rel", "noreferrer", "aria-label", "Cotiz\u00E1 por WhatsApp", 1, "whatsapp-float", 3, "href"], [1, "nav__link", 3, "click", "href"], [1, "solution-card"], [3, "src", "alt"], [1, "solution-card__body"], [1, "benefit"], ["aria-hidden", "true", 1, "benefit__icon"], [3, "href"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "header", 0)(1, "a", 1);
            i0.ɵɵlistener("click", function LandingComponent_Template_a_click_1_listener() { return ctx.closeMenu(); });
            i0.ɵɵelementStart(2, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(3, "svg", 3);
            i0.ɵɵelement(4, "path", 4)(5, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(6, "span", 6)(7, "strong");
            i0.ɵɵtext(8, "Smart");
            i0.ɵɵelementStart(9, "span");
            i0.ɵɵtext(10, "Life");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "small");
            i0.ɵɵtext(12, "Automatizaci\u00F3n inteligente");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(13, "nav", 7);
            i0.ɵɵtemplate(14, LandingComponent_a_14_Template, 2, 4, "a", 8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "a", 9);
            i0.ɵɵtext(16, " Cotiz\u00E1 ahora ");
            i0.ɵɵelementStart(17, "span", 10);
            i0.ɵɵtext(18, "\u2197");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "button", 11);
            i0.ɵɵlistener("click", function LandingComponent_Template_button_click_19_listener() { return ctx.toggleMenu(); });
            i0.ɵɵelement(20, "span")(21, "span");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(22, "main")(23, "section", 12);
            i0.ɵɵelement(24, "div", 13)(25, "div", 14);
            i0.ɵɵelementStart(26, "div", 15)(27, "p", 16);
            i0.ɵɵtext(28, "Tecnolog\u00EDa que se adapta a tu vida");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "h1");
            i0.ɵɵtext(30, "Automatiz\u00E1 tu casa ");
            i0.ɵɵelementStart(31, "span");
            i0.ɵɵtext(32, "o negocio.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(33, "p", 17);
            i0.ɵɵtext(34, " Control\u00E1 luces, c\u00E1maras, cerraduras y m\u00E1s desde tu celular o con tu voz. ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "p", 18);
            i0.ɵɵtext(36, "Viv\u00ED m\u00E1s c\u00F3modo, seguro y conectado.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "div", 19)(38, "a", 20);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(39, "svg", 21);
            i0.ɵɵelement(40, "path", 22)(41, "path", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(42, " Cotiz\u00E1 por WhatsApp ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(43, "a", 24);
            i0.ɵɵtext(44, " Ver soluciones ");
            i0.ɵɵelementStart(45, "span", 10);
            i0.ɵɵtext(46, "\u2304");
            i0.ɵɵelementEnd()()()()();
            i0.ɵɵelementStart(47, "section", 25)(48, "div", 26)(49, "p");
            i0.ɵɵtext(50, "Tecnolog\u00EDa compatible con");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(51, "div", 27)(52, "span");
            i0.ɵɵtext(53, "alexa");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(54, "span");
            i0.ɵɵtext(55, "Google Home");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(56, "span");
            i0.ɵɵtext(57, "tuya");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(58, "span");
            i0.ɵɵtext(59, "Smart Life");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(60, "section", 28)(61, "div", 29)(62, "p", 30);
            i0.ɵɵtext(63, "Soluciones");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(64, "h2");
            i0.ɵɵtext(65, "Inteligencia para cada espacio.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(66, "p");
            i0.ɵɵtext(67, "Dise\u00F1amos sistemas a medida para hogares y negocios de todos los tama\u00F1os.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(68, "a", 31);
            i0.ɵɵtext(69, " Conoc\u00E9 m\u00E1s ");
            i0.ɵɵelementStart(70, "span", 10);
            i0.ɵɵtext(71, "\u2192");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(72, "div", 32);
            i0.ɵɵtemplate(73, LandingComponent_article_73_Template, 9, 4, "article", 33);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(74, "section", 34)(75, "div", 35)(76, "p", 30);
            i0.ɵɵtext(77, "Control total");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(78, "h2");
            i0.ɵɵtext(79, "Todo desde tu celular.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(80, "p");
            i0.ɵɵtext(81, "Una sola app para controlar todos tus dispositivos desde donde est\u00E9s.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(82, "ul", 36)(83, "li");
            i0.ɵɵtext(84, "Encend\u00E9 y apag\u00E1 luces");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(85, "li");
            i0.ɵɵtext(86, "Revis\u00E1 c\u00E1maras en tiempo real");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(87, "li");
            i0.ɵɵtext(88, "Activ\u00E1 modos y escenas");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(89, "li");
            i0.ɵɵtext(90, "Recib\u00ED alertas al instante");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(91, "a", 37);
            i0.ɵɵtext(92, " Ver c\u00F3mo funciona ");
            i0.ɵɵelementStart(93, "span", 10);
            i0.ɵɵtext(94, "\u2192");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelement(95, "div", 38);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(96, "section", 39);
            i0.ɵɵtemplate(97, LandingComponent_article_97_Template, 7, 3, "article", 40);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(98, "section", 41)(99, "div")(100, "p", 30);
            i0.ɵɵtext(101, "Est\u00E1s a un paso de vivir inteligente");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(102, "h2");
            i0.ɵɵtext(103, "Transform\u00E1 tu espacio hoy.");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(104, "p");
            i0.ɵɵtext(105, "Solicit\u00E1 tu presupuesto sin compromiso.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(106, "div", 42)(107, "a", 20);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(108, "svg", 21);
            i0.ɵɵelement(109, "path", 22)(110, "path", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵtext(111, " Cotiz\u00E1 por WhatsApp ");
            i0.ɵɵelementEnd();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(112, "small");
            i0.ɵɵtext(113, "Respuesta r\u00E1pida garantizada \u26A1");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(114, "footer", 43)(115, "a", 44)(116, "span", 2);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(117, "svg", 3);
            i0.ɵɵelement(118, "path", 4)(119, "path", 5);
            i0.ɵɵelementEnd()();
            i0.ɵɵnamespaceHTML();
            i0.ɵɵelementStart(120, "span", 6)(121, "strong");
            i0.ɵɵtext(122, "Smart");
            i0.ɵɵelementStart(123, "span");
            i0.ɵɵtext(124, "Life");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(125, "small");
            i0.ɵɵtext(126, "Automatizaci\u00F3n inteligente");
            i0.ɵɵelementEnd()()();
            i0.ɵɵelementStart(127, "nav", 45);
            i0.ɵɵtemplate(128, LandingComponent_a_128_Template, 2, 2, "a", 46);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(129, "p");
            i0.ɵɵtext(130, "\u00A9 2024 SmartLife. Todos los derechos reservados.");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(131, "a", 47);
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(132, "svg", 21);
            i0.ɵɵelement(133, "path", 22)(134, "path", 23);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵclassProp("site-header--scrolled", ctx.isScrolled());
            i0.ɵɵadvance(13);
            i0.ɵɵclassProp("nav--open", ctx.isMenuOpen());
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.navItems);
            i0.ɵɵadvance();
            i0.ɵɵproperty("href", ctx.whatsappUrl, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(4);
            i0.ɵɵattribute("aria-expanded", ctx.isMenuOpen());
            i0.ɵɵadvance(19);
            i0.ɵɵproperty("href", ctx.whatsappUrl, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(35);
            i0.ɵɵproperty("ngForOf", ctx.solutions);
            i0.ɵɵadvance(24);
            i0.ɵɵproperty("ngForOf", ctx.benefits);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("href", ctx.whatsappUrl, i0.ɵɵsanitizeUrl);
            i0.ɵɵadvance(21);
            i0.ɵɵproperty("ngForOf", ctx.navItems);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("href", ctx.whatsappUrl, i0.ɵɵsanitizeUrl);
        } }, dependencies: [CommonModule, i1.NgForOf], styles: ["[_nghost-%COMP%] {\n  display: block;\n  min-height: 100vh;\n  background:\n    radial-gradient(circle at 75% 10%, rgba(154, 205, 0, 0.05), transparent 26rem),\n    var(--background-main);\n}\n\n.page-shell[_ngcontent-%COMP%] {\n  width: min(100% - 64px, 1240px);\n  margin-inline: auto;\n}\n\n.section-anchor[_ngcontent-%COMP%] {\n  scroll-margin-top: 96px;\n}\n\n.site-header[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  display: grid;\n  width: 100%;\n  height: 88px;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: center;\n  padding: 0 clamp(28px, 4vw, 58px);\n  transition:\n    background 220ms ease,\n    border-color 220ms ease,\n    backdrop-filter 220ms ease;\n}\n\n.site-header--scrolled[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border);\n  background: rgba(5, 6, 6, 0.72);\n  backdrop-filter: blur(18px);\n}\n\n.brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 10px;\n}\n\n.brand__mark[_ngcontent-%COMP%] {\n  display: grid;\n  width: 30px;\n  height: 30px;\n  place-items: center;\n  color: var(--primary);\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  path {\n    fill: none;\n    stroke: currentColor;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 2.4;\n  }\n}\n\n.brand__text[_ngcontent-%COMP%] {\n  display: grid;\n  line-height: 1;\n  text-transform: uppercase;\n\n  strong {\n    color: var(--text-primary);\n    font-size: 20px;\n    font-weight: 700;\n    letter-spacing: 0;\n\n    span {\n      color: var(--primary);\n    }\n  }\n\n  small {\n    margin-top: 4px;\n    color: var(--text-secondary);\n    font-size: 7px;\n    font-weight: 700;\n    letter-spacing: 0.7px;\n  }\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: clamp(26px, 4vw, 56px);\n}\n\n.nav__link[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 10px 0;\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  transition: color 180ms ease;\n\n  &::after {\n    position: absolute;\n    right: 0;\n    bottom: 2px;\n    left: 0;\n    height: 1px;\n    background: var(--primary);\n    content: \"\";\n    opacity: 0;\n    transform: scaleX(0.55);\n    transition:\n      opacity 180ms ease,\n      transform 180ms ease;\n  }\n\n  &:hover,\n  &--active {\n    color: var(--text-primary);\n\n    &::after {\n      opacity: 1;\n      transform: scaleX(1);\n    }\n  }\n}\n\n.quote-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 176px;\n  height: 50px;\n  justify-self: end;\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  color: var(--text-primary);\n  font-size: 14px;\n  font-weight: 700;\n  transition:\n    border-color 180ms ease,\n    background 180ms ease,\n    transform 180ms ease;\n\n  &:hover {\n    border-color: var(--border-hover);\n    background: rgba(255, 255, 255, 0.04);\n    transform: translateY(-1px);\n  }\n}\n\n.menu-button[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 92vh;\n  overflow: hidden;\n  align-items: center;\n  border-bottom: 1px solid var(--border);\n  background: #020303;\n}\n\n.hero__image[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 0 0 auto;\n  width: min(68vw, 960px);\n  background:\n    linear-gradient(90deg, rgba(5, 6, 6, 0.5), rgba(5, 6, 6, 0.06) 28%, rgba(5, 6, 6, 0.36) 100%),\n    url(\"/assets/images/hero-house.png\") center right / cover no-repeat;\n  opacity: 0.94;\n}\n\n.hero__shade[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(90deg, #050606 0%, rgba(5, 6, 6, 0.94) 28%, rgba(5, 6, 6, 0.34) 58%, rgba(5, 6, 6, 0.82) 100%),\n    linear-gradient(180deg, rgba(5, 6, 6, 0.18) 0%, rgba(5, 6, 6, 0) 54%, rgba(5, 6, 6, 0.92) 100%);\n}\n\n.hero__content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding-top: 70px;\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 28px;\n  color: var(--text-secondary);\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n\n.eyebrow--green[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n\nh1[_ngcontent-%COMP%], \nh2[_ngcontent-%COMP%], \nh3[_ngcontent-%COMP%], \np[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin-bottom: 28px;\n  color: var(--text-primary);\n  font-size: clamp(54px, 7vw, 82px);\n  font-weight: 700;\n  letter-spacing: 0;\n  line-height: 0.99;\n\n  span {\n    display: block;\n    color: var(--primary);\n  }\n}\n\n.hero__lead[_ngcontent-%COMP%], \n.hero__support[_ngcontent-%COMP%] {\n  max-width: 470px;\n  color: var(--text-secondary);\n  font-size: 20px;\n  line-height: 1.55;\n}\n\n.hero__lead[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n}\n\n.hero__support[_ngcontent-%COMP%] {\n  margin-bottom: 44px;\n}\n\n.hero__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 22px;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 56px;\n  align-items: center;\n  justify-content: center;\n  gap: 11px;\n  border-radius: 12px;\n  padding: 0 30px;\n  font-size: 14px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition:\n    border-color 180ms ease,\n    background 180ms ease,\n    box-shadow 180ms ease,\n    color 180ms ease,\n    transform 180ms ease;\n\n  svg {\n    width: 20px;\n    height: 20px;\n\n    path {\n      fill: none;\n      stroke: currentColor;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-width: 1.7;\n    }\n  }\n\n  &:hover {\n    transform: translateY(-1px);\n  }\n}\n\n.button--primary[_ngcontent-%COMP%] {\n  min-width: 238px;\n  background: var(--primary);\n  color: #071005;\n  box-shadow: 0 18px 42px rgba(154, 205, 0, 0.2);\n\n  &:hover {\n    background: var(--primary-hover);\n    box-shadow: 0 20px 48px rgba(154, 205, 0, 0.28);\n  }\n}\n\n.button--secondary[_ngcontent-%COMP%], \n.button--ghost[_ngcontent-%COMP%] {\n  border: 1px solid var(--border);\n  background: rgba(5, 6, 6, 0.35);\n  color: var(--text-primary);\n\n  &:hover {\n    border-color: var(--border-hover);\n    background: rgba(255, 255, 255, 0.04);\n  }\n}\n\n.button--secondary[_ngcontent-%COMP%] {\n  min-width: 196px;\n}\n\n.button--ghost[_ngcontent-%COMP%] {\n  min-width: 142px;\n  min-height: 52px;\n  padding-inline: 25px;\n}\n\n.compatibility[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--border);\n  background: rgba(6, 7, 7, 0.94);\n}\n\n.compatibility__inner[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 92px;\n  align-items: center;\n  gap: 70px;\n\n  p {\n    margin: 0;\n    color: var(--text-muted);\n    font-size: 13px;\n    font-weight: 600;\n    letter-spacing: 1.2px;\n    text-transform: uppercase;\n  }\n}\n\n.compatibility__logos[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 1;\n  grid-template-columns: repeat(4, minmax(110px, 1fr));\n  align-items: center;\n  color: rgba(245, 245, 245, 0.52);\n\n  span {\n    display: grid;\n    min-height: 34px;\n    place-items: center;\n    border-left: 1px solid var(--border);\n    font-size: 20px;\n    font-weight: 700;\n  }\n\n  span:first-child {\n    border-left: 0;\n    font-size: 26px;\n    font-weight: 600;\n  }\n\n  span:nth-child(3) {\n    font-size: 25px;\n  }\n}\n\n.solutions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(250px, 330px) 1fr;\n  gap: 72px;\n  padding: 86px 0 54px;\n}\n\n.section-copy[_ngcontent-%COMP%] {\n  align-self: center;\n\n  h2 {\n    margin-bottom: 28px;\n    color: var(--text-primary);\n    font-size: clamp(38px, 4vw, 52px);\n    font-weight: 650;\n    letter-spacing: 0;\n    line-height: 1.15;\n  }\n\n  > p:not(.eyebrow) {\n    max-width: 325px;\n    margin-bottom: 46px;\n    color: var(--text-secondary);\n  }\n}\n\n.solution-grid[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  overflow: hidden;\n  border: 1px solid var(--border);\n  border-radius: 20px;\n}\n\n.solution-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 456px;\n  overflow: hidden;\n  background: var(--surface);\n  transition:\n    background 180ms ease,\n    transform 180ms ease;\n\n  + .solution-card {\n    border-left: 1px solid var(--border);\n  }\n\n  img {\n    width: 100%;\n    height: 64%;\n    object-fit: cover;\n    filter: saturate(0.92);\n    transition: transform 500ms ease;\n  }\n\n  &::after {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(180deg, rgba(5, 6, 6, 0) 26%, rgba(5, 6, 6, 0.82) 64%, #090a0a 100%);\n    content: \"\";\n    pointer-events: none;\n  }\n\n  &:hover {\n    background: var(--surface-light);\n\n    img {\n      transform: scale(1.035);\n    }\n  }\n}\n\n.solution-card__body[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  right: 22px;\n  bottom: 24px;\n  left: 22px;\n\n  h3 {\n    margin-bottom: 10px;\n    color: var(--text-primary);\n    font-size: 20px;\n    font-weight: 650;\n  }\n\n  p {\n    min-height: 46px;\n    margin-bottom: 20px;\n    color: var(--text-secondary);\n    font-size: 13px;\n    line-height: 1.55;\n  }\n\n  span {\n    display: block;\n    color: var(--text-primary);\n    font-size: 25px;\n    text-align: right;\n  }\n}\n\n.control[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 548px;\n  grid-template-columns: minmax(280px, 390px) 1fr;\n  overflow: hidden;\n  margin-top: 0;\n  border: 1px solid var(--border);\n  border-radius: 9px;\n  background:\n    linear-gradient(90deg, rgba(5, 6, 6, 0.96) 0%, rgba(5, 6, 6, 0.88) 40%, rgba(5, 6, 6, 0.1) 70%),\n    var(--surface);\n}\n\n.control__copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: clamp(42px, 5vw, 62px) 0 clamp(42px, 5vw, 62px) clamp(34px, 5vw, 52px);\n\n  h2 {\n    max-width: 320px;\n    margin-bottom: 24px;\n    font-size: clamp(36px, 4vw, 48px);\n    font-weight: 650;\n    letter-spacing: 0;\n    line-height: 1.12;\n  }\n\n  > p:not(.eyebrow) {\n    max-width: 325px;\n    margin-bottom: 40px;\n    color: var(--text-secondary);\n  }\n}\n\n.check-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n  margin: 0 0 42px;\n  padding: 0;\n  color: var(--text-secondary);\n  list-style: none;\n\n  li {\n    position: relative;\n    padding-left: 36px;\n\n    &::before {\n      position: absolute;\n      top: 1px;\n      left: 0;\n      display: grid;\n      width: 22px;\n      height: 22px;\n      place-items: center;\n      border: 1px solid var(--primary);\n      border-radius: 999px;\n      color: var(--primary);\n      content: \"\u2713\";\n      font-size: 12px;\n      font-weight: 700;\n    }\n  }\n}\n\n.control__visual[_ngcontent-%COMP%] {\n  min-height: 548px;\n  background:\n    linear-gradient(90deg, rgba(5, 6, 6, 0.86), rgba(5, 6, 6, 0.08) 40%, rgba(5, 6, 6, 0.18)),\n    url(\"/assets/images/mobile-control.png\") center right / cover no-repeat;\n}\n\n.benefits[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  margin-top: 32px;\n  overflow: hidden;\n  border: 1px solid var(--border);\n  border-radius: 9px;\n  background: rgba(12, 13, 13, 0.62);\n}\n\n.benefit[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 1fr;\n  gap: 20px;\n  align-items: center;\n  min-height: 112px;\n  padding: 26px 28px;\n\n  + .benefit {\n    border-left: 1px solid var(--border);\n  }\n\n  h3 {\n    margin-bottom: 4px;\n    color: var(--text-primary);\n    font-size: 15px;\n    font-weight: 650;\n  }\n\n  p {\n    margin: 0;\n    color: var(--text-secondary);\n    font-size: 13px;\n  }\n}\n\n.benefit__icon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  color: var(--primary);\n\n  &::before,\n  &::after {\n    position: absolute;\n    content: \"\";\n  }\n\n  &[data-icon=\"tool\"]::before {\n    inset: 6px 12px;\n    border: 3px solid currentColor;\n    border-top-color: transparent;\n    border-radius: 999px;\n    transform: rotate(40deg);\n  }\n\n  &[data-icon=\"tool\"]::after {\n    right: 2px;\n    bottom: 2px;\n    width: 22px;\n    height: 4px;\n    border-radius: 999px;\n    background: currentColor;\n    transform: rotate(-45deg);\n  }\n\n  &[data-icon=\"gear\"]::before {\n    inset: 4px;\n    border: 3px solid currentColor;\n    border-radius: 999px;\n    box-shadow:\n      0 -8px 0 -5px currentColor,\n      0 8px 0 -5px currentColor,\n      -8px 0 0 -5px currentColor,\n      8px 0 0 -5px currentColor;\n  }\n\n  &[data-icon=\"gear\"]::after {\n    inset: 14px;\n    border-radius: 999px;\n    background: currentColor;\n  }\n\n  &[data-icon=\"headset\"]::before {\n    inset: 4px 5px 11px;\n    border: 3px solid currentColor;\n    border-bottom: 0;\n    border-radius: 999px 999px 0 0;\n  }\n\n  &[data-icon=\"headset\"]::after {\n    right: 5px;\n    bottom: 6px;\n    width: 13px;\n    height: 8px;\n    border-right: 3px solid currentColor;\n    border-bottom: 3px solid currentColor;\n    border-radius: 0 0 8px 0;\n  }\n\n  &[data-icon=\"shield\"]::before {\n    inset: 2px 5px;\n    border: 3px solid currentColor;\n    border-radius: 15px 15px 18px 18px;\n    clip-path: polygon(50% 0, 100% 18%, 100% 62%, 50% 100%, 0 62%, 0 18%);\n  }\n}\n\n.cta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 40px;\n  align-items: center;\n  margin-top: 36px;\n  padding: clamp(38px, 5vw, 58px) clamp(34px, 5vw, 52px);\n  border: 1px solid var(--border);\n  border-radius: 9px;\n  background:\n    linear-gradient(90deg, rgba(13, 14, 14, 0.92), rgba(8, 9, 9, 0.62)),\n    var(--background-secondary);\n\n  h2 {\n    margin-bottom: 16px;\n    font-size: clamp(36px, 4vw, 50px);\n    font-weight: 650;\n    letter-spacing: 0;\n    line-height: 1.12;\n  }\n\n  p:not(.eyebrow) {\n    margin: 0;\n    color: var(--text-secondary);\n  }\n}\n\n.cta__action[_ngcontent-%COMP%] {\n  display: grid;\n  justify-items: center;\n  gap: 18px;\n\n  small {\n    color: var(--text-secondary);\n    font-size: 12px;\n  }\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: 42px;\n  align-items: center;\n  padding: 64px 0 40px;\n  color: var(--text-muted);\n\n  nav {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: clamp(20px, 4vw, 42px);\n  }\n\n  a {\n    font-size: 12px;\n    transition: color 180ms ease;\n\n    &:hover {\n      color: var(--text-primary);\n    }\n  }\n\n  p {\n    justify-self: end;\n    margin: 0;\n    font-size: 12px;\n  }\n}\n\n.whatsapp-float[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 25;\n  right: 28px;\n  bottom: 28px;\n  display: grid;\n  width: 68px;\n  height: 68px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, 0.28);\n  border-radius: 999px;\n  background: var(--primary);\n  color: #fff;\n  box-shadow: 0 0 0 12px rgba(154, 205, 0, 0.12), 0 18px 42px rgba(154, 205, 0, 0.25);\n  transition:\n    background 180ms ease,\n    transform 180ms ease;\n\n  svg {\n    width: 38px;\n    height: 38px;\n  }\n\n  path {\n    fill: none;\n    stroke: currentColor;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 1.7;\n  }\n\n  &:hover {\n    background: var(--primary-hover);\n    transform: translateY(-2px);\n  }\n}\n\n@media (max-width: 1100px) {\n  .site-header[_ngcontent-%COMP%] {\n    grid-template-columns: auto 1fr auto auto;\n    gap: 16px;\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    gap: 22px;\n  }\n\n  .solutions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 38px;\n  }\n\n  .section-copy[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto;\n    gap: 28px 40px;\n    align-items: end;\n\n    .eyebrow,\n    h2,\n    > p:not(.eyebrow) {\n      grid-column: 1;\n    }\n\n    .button {\n      grid-column: 2;\n      grid-row: 2 / span 2;\n    }\n  }\n\n  .benefits[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .benefit[_ngcontent-%COMP%]:nth-child(3) {\n    border-left: 0;\n  }\n\n  .benefit[_ngcontent-%COMP%]:nth-child(n + 3) {\n    border-top: 1px solid var(--border);\n  }\n}\n\n@media (max-width: 860px) {\n  .page-shell[_ngcontent-%COMP%] {\n    width: min(100% - 40px, 1240px);\n  }\n\n  .site-header[_ngcontent-%COMP%] {\n    height: 76px;\n    padding-inline: 20px;\n  }\n\n  .quote-link[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .menu-button[_ngcontent-%COMP%] {\n    position: relative;\n    z-index: 31;\n    display: grid;\n    width: 44px;\n    height: 44px;\n    place-items: center;\n    justify-self: end;\n    border: 1px solid var(--border);\n    border-radius: 10px;\n    background: rgba(255, 255, 255, 0.04);\n\n    span {\n      width: 18px;\n      height: 1px;\n      background: var(--text-primary);\n      transition:\n        transform 180ms ease,\n        opacity 180ms ease;\n    }\n\n    &[aria-expanded=\"true\"] span:first-child {\n      transform: translateY(5px) rotate(45deg);\n    }\n\n    &[aria-expanded=\"true\"] span:last-child {\n      transform: translateY(-5px) rotate(-45deg);\n    }\n  }\n\n  .nav[_ngcontent-%COMP%] {\n    position: fixed;\n    z-index: 30;\n    inset: 0;\n    display: grid;\n    align-content: center;\n    justify-items: center;\n    gap: 26px;\n    background: rgba(5, 6, 6, 0.94);\n    opacity: 0;\n    pointer-events: none;\n    transform: translateY(-10px);\n    transition:\n      opacity 180ms ease,\n      transform 180ms ease;\n    backdrop-filter: blur(20px);\n  }\n\n  .nav--open[_ngcontent-%COMP%] {\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateY(0);\n  }\n\n  .nav__link[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n\n  .hero[_ngcontent-%COMP%] {\n    min-height: 88vh;\n    align-items: end;\n  }\n\n  .hero__image[_ngcontent-%COMP%] {\n    inset: 72px 0 auto;\n    width: 100%;\n    height: 54%;\n    background-position: center top;\n  }\n\n  .hero__shade[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(180deg, rgba(5, 6, 6, 0.04) 0%, rgba(5, 6, 6, 0.42) 35%, #050606 73%),\n      linear-gradient(90deg, rgba(5, 6, 6, 0.9), rgba(5, 6, 6, 0.18));\n  }\n\n  .hero__content[_ngcontent-%COMP%] {\n    padding: 360px 0 64px;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    max-width: 520px;\n    font-size: clamp(44px, 12vw, 56px);\n  }\n\n  .hero__lead[_ngcontent-%COMP%], \n   .hero__support[_ngcontent-%COMP%] {\n    max-width: 520px;\n    font-size: 17px;\n  }\n\n  .compatibility__inner[_ngcontent-%COMP%] {\n    display: grid;\n    gap: 24px;\n    padding-block: 26px;\n  }\n\n  .compatibility__logos[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(120px, 1fr));\n    gap: 18px 0;\n\n    span:nth-child(odd) {\n      border-left: 0;\n    }\n  }\n\n  .solution-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    border-radius: 16px;\n  }\n\n  .solution-card[_ngcontent-%COMP%] {\n    min-height: 390px;\n  }\n\n  .solution-card[_ngcontent-%COMP%]:nth-child(3) {\n    border-left: 0;\n  }\n\n  .solution-card[_ngcontent-%COMP%]:nth-child(n + 3) {\n    border-top: 1px solid var(--border);\n  }\n\n  .control[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .control__copy[_ngcontent-%COMP%] {\n    padding-right: clamp(34px, 5vw, 52px);\n  }\n\n  .control__visual[_ngcontent-%COMP%] {\n    min-height: 390px;\n    background-position: center;\n  }\n\n  .cta[_ngcontent-%COMP%], \n   .footer[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .cta__action[_ngcontent-%COMP%], \n   .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    justify-self: start;\n  }\n\n  .footer[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n}\n\n@media (max-width: 560px) {\n  .page-shell[_ngcontent-%COMP%] {\n    width: min(100% - 32px, 1240px);\n  }\n\n  .brand__text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n\n  .brand__text[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    font-size: 6px;\n  }\n\n  .hero__content[_ngcontent-%COMP%] {\n    padding-top: 320px;\n  }\n\n  .hero__actions[_ngcontent-%COMP%], \n   .button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .button[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n\n  .solutions[_ngcontent-%COMP%] {\n    padding-top: 64px;\n  }\n\n  .section-copy[_ngcontent-%COMP%] {\n    display: block;\n\n    .button {\n      width: auto;\n      margin-top: 12px;\n    }\n  }\n\n  .solution-grid[_ngcontent-%COMP%], \n   .benefits[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .solution-card[_ngcontent-%COMP%] {\n    min-height: 360px;\n\n    + .solution-card {\n      border-top: 1px solid var(--border);\n      border-left: 0;\n    }\n  }\n\n  .benefit[_ngcontent-%COMP%] {\n    border-left: 0;\n\n    + .benefit {\n      border-top: 1px solid var(--border);\n    }\n  }\n\n  .cta[_ngcontent-%COMP%] {\n    padding-inline: 24px;\n  }\n\n  .whatsapp-float[_ngcontent-%COMP%] {\n    right: 18px;\n    bottom: 18px;\n    width: 58px;\n    height: 58px;\n\n    svg {\n      width: 32px;\n      height: 32px;\n    }\n  }\n}"], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LandingComponent, [{
        type: Component,
        args: [{ selector: 'app-landing', standalone: true, imports: [CommonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<header class=\"site-header\" [class.site-header--scrolled]=\"isScrolled()\">\n  <a class=\"brand\" href=\"#inicio\" aria-label=\"Ir al inicio\" (click)=\"closeMenu()\">\n    <span class=\"brand__mark\" aria-hidden=\"true\">\n      <svg viewBox=\"0 0 32 32\">\n        <path d=\"M4.5 13.8 16 5l11.5 8.8V27h-7.3v-9.4h-8.4V27H4.5V13.8Z\" />\n        <path d=\"M12.1 27v-9.4h7.8V27\" />\n      </svg>\n    </span>\n    <span class=\"brand__text\">\n      <strong>Smart<span>Life</span></strong>\n      <small>Automatizaci\u00F3n inteligente</small>\n    </span>\n  </a>\n\n  <nav class=\"nav\" [class.nav--open]=\"isMenuOpen()\" aria-label=\"Navegaci\u00F3n principal\">\n    <a\n      *ngFor=\"let item of navItems; first as isFirst\"\n      [class.nav__link--active]=\"isFirst\"\n      class=\"nav__link\"\n      [href]=\"'#' + item.target\"\n      (click)=\"closeMenu()\"\n    >\n      {{ item.label }}\n    </a>\n  </nav>\n\n  <a class=\"quote-link\" [href]=\"whatsappUrl\" target=\"_blank\" rel=\"noreferrer\">\n    Cotiz\u00E1 ahora\n    <span aria-hidden=\"true\">\u2197</span>\n  </a>\n\n  <button\n    class=\"menu-button\"\n    type=\"button\"\n    [attr.aria-expanded]=\"isMenuOpen()\"\n    aria-label=\"Abrir men\u00FA\"\n    (click)=\"toggleMenu()\"\n  >\n    <span></span>\n    <span></span>\n  </button>\n</header>\n\n<main>\n  <section id=\"inicio\" class=\"hero section-anchor\">\n    <div class=\"hero__image\" aria-hidden=\"true\"></div>\n    <div class=\"hero__shade\" aria-hidden=\"true\"></div>\n\n    <div class=\"hero__content page-shell\">\n      <p class=\"eyebrow\">Tecnolog\u00EDa que se adapta a tu vida</p>\n      <h1>Automatiz\u00E1 tu casa <span>o negocio.</span></h1>\n      <p class=\"hero__lead\">\n        Control\u00E1 luces, c\u00E1maras, cerraduras y m\u00E1s desde tu celular o con tu voz.\n      </p>\n      <p class=\"hero__support\">Viv\u00ED m\u00E1s c\u00F3modo, seguro y conectado.</p>\n\n      <div class=\"hero__actions\">\n        <a class=\"button button--primary\" [href]=\"whatsappUrl\" target=\"_blank\" rel=\"noreferrer\">\n          <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n            <path d=\"M20.5 11.9a8.4 8.4 0 0 1-12.4 7.4L4 20.5l1.3-4A8.4 8.4 0 1 1 20.5 12Z\" />\n            <path d=\"M9.7 8.2c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.4 2.6.9 3.1.7 3.7.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4l-1.9-.9c-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6l-.8-2Z\" />\n          </svg>\n          Cotiz\u00E1 por WhatsApp\n        </a>\n        <a class=\"button button--secondary\" href=\"#soluciones\">\n          Ver soluciones\n          <span aria-hidden=\"true\">\u2304</span>\n        </a>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"compatibility\" aria-label=\"Tecnolog\u00EDa compatible\">\n    <div class=\"page-shell compatibility__inner\">\n      <p>Tecnolog\u00EDa compatible con</p>\n      <div class=\"compatibility__logos\">\n        <span>alexa</span>\n        <span>Google Home</span>\n        <span>tuya</span>\n        <span>Smart Life</span>\n      </div>\n    </div>\n  </section>\n\n  <section id=\"soluciones\" class=\"solutions section-anchor page-shell\">\n    <div class=\"section-copy\">\n      <p class=\"eyebrow eyebrow--green\">Soluciones</p>\n      <h2>Inteligencia para cada espacio.</h2>\n      <p>Dise\u00F1amos sistemas a medida para hogares y negocios de todos los tama\u00F1os.</p>\n      <a class=\"button button--ghost\" href=\"#control\">\n        Conoc\u00E9 m\u00E1s\n        <span aria-hidden=\"true\">\u2192</span>\n      </a>\n    </div>\n\n    <div class=\"solution-grid\">\n      <article class=\"solution-card\" *ngFor=\"let solution of solutions\">\n        <img [src]=\"solution.image\" [alt]=\"solution.title\">\n        <div class=\"solution-card__body\">\n          <h3>{{ solution.title }}</h3>\n          <p>{{ solution.description }}</p>\n          <span aria-hidden=\"true\">\u2192</span>\n        </div>\n      </article>\n    </div>\n  </section>\n\n  <section id=\"control\" class=\"control section-anchor page-shell\">\n    <div class=\"control__copy\">\n      <p class=\"eyebrow eyebrow--green\">Control total</p>\n      <h2>Todo desde tu celular.</h2>\n      <p>Una sola app para controlar todos tus dispositivos desde donde est\u00E9s.</p>\n\n      <ul class=\"check-list\" aria-label=\"Funcionalidades principales\">\n        <li>Encend\u00E9 y apag\u00E1 luces</li>\n        <li>Revis\u00E1 c\u00E1maras en tiempo real</li>\n        <li>Activ\u00E1 modos y escenas</li>\n        <li>Recib\u00ED alertas al instante</li>\n      </ul>\n\n      <a class=\"button button--ghost\" href=\"#contacto\">\n        Ver c\u00F3mo funciona\n        <span aria-hidden=\"true\">\u2192</span>\n      </a>\n    </div>\n    <div class=\"control__visual\" aria-hidden=\"true\"></div>\n  </section>\n\n  <section id=\"combos\" class=\"benefits section-anchor page-shell\" aria-label=\"Servicios incluidos\">\n    <article class=\"benefit\" *ngFor=\"let benefit of benefits\">\n      <span class=\"benefit__icon\" [attr.data-icon]=\"benefit.icon\" aria-hidden=\"true\"></span>\n      <div>\n        <h3>{{ benefit.title }}</h3>\n        <p>{{ benefit.description }}</p>\n      </div>\n    </article>\n  </section>\n\n  <section id=\"contacto\" class=\"cta section-anchor page-shell\">\n    <div>\n      <p class=\"eyebrow eyebrow--green\">Est\u00E1s a un paso de vivir inteligente</p>\n      <h2>Transform\u00E1 tu espacio hoy.</h2>\n      <p>Solicit\u00E1 tu presupuesto sin compromiso.</p>\n    </div>\n    <div class=\"cta__action\">\n      <a class=\"button button--primary\" [href]=\"whatsappUrl\" target=\"_blank\" rel=\"noreferrer\">\n        <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n          <path d=\"M20.5 11.9a8.4 8.4 0 0 1-12.4 7.4L4 20.5l1.3-4A8.4 8.4 0 1 1 20.5 12Z\" />\n          <path d=\"M9.7 8.2c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.4 2.6.9 3.1.7 3.7.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4l-1.9-.9c-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6l-.8-2Z\" />\n        </svg>\n        Cotiz\u00E1 por WhatsApp\n      </a>\n      <small>Respuesta r\u00E1pida garantizada \u26A1</small>\n    </div>\n  </section>\n</main>\n\n<footer id=\"sobre-nosotros\" class=\"footer section-anchor page-shell\">\n  <a class=\"brand\" href=\"#inicio\" aria-label=\"Ir al inicio\">\n    <span class=\"brand__mark\" aria-hidden=\"true\">\n      <svg viewBox=\"0 0 32 32\">\n        <path d=\"M4.5 13.8 16 5l11.5 8.8V27h-7.3v-9.4h-8.4V27H4.5V13.8Z\" />\n        <path d=\"M12.1 27v-9.4h7.8V27\" />\n      </svg>\n    </span>\n    <span class=\"brand__text\">\n      <strong>Smart<span>Life</span></strong>\n      <small>Automatizaci\u00F3n inteligente</small>\n    </span>\n  </a>\n\n  <nav aria-label=\"Navegaci\u00F3n del footer\">\n    <a *ngFor=\"let item of navItems\" [href]=\"'#' + item.target\">{{ item.label }}</a>\n  </nav>\n\n  <p>\u00A9 2024 SmartLife. Todos los derechos reservados.</p>\n</footer>\n\n<a class=\"whatsapp-float\" [href]=\"whatsappUrl\" target=\"_blank\" rel=\"noreferrer\" aria-label=\"Cotiz\u00E1 por WhatsApp\">\n  <svg viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n    <path d=\"M20.5 11.9a8.4 8.4 0 0 1-12.4 7.4L4 20.5l1.3-4A8.4 8.4 0 1 1 20.5 12Z\" />\n    <path d=\"M9.7 8.2c-.2-.5-.4-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.4 2.6.9 3.1.7 3.7.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4l-1.9-.9c-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6l-.8-2Z\" />\n  </svg>\n</a>\n", styles: [":host {\n  display: block;\n  min-height: 100vh;\n  background:\n    radial-gradient(circle at 75% 10%, rgba(154, 205, 0, 0.05), transparent 26rem),\n    var(--background-main);\n}\n\n.page-shell {\n  width: min(100% - 64px, 1240px);\n  margin-inline: auto;\n}\n\n.section-anchor {\n  scroll-margin-top: 96px;\n}\n\n.site-header {\n  position: fixed;\n  z-index: 20;\n  top: 0;\n  left: 0;\n  display: grid;\n  width: 100%;\n  height: 88px;\n  grid-template-columns: 1fr auto 1fr;\n  align-items: center;\n  padding: 0 clamp(28px, 4vw, 58px);\n  transition:\n    background 220ms ease,\n    border-color 220ms ease,\n    backdrop-filter 220ms ease;\n}\n\n.site-header--scrolled {\n  border-bottom: 1px solid var(--border);\n  background: rgba(5, 6, 6, 0.72);\n  backdrop-filter: blur(18px);\n}\n\n.brand {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 10px;\n}\n\n.brand__mark {\n  display: grid;\n  width: 30px;\n  height: 30px;\n  place-items: center;\n  color: var(--primary);\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n\n  path {\n    fill: none;\n    stroke: currentColor;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 2.4;\n  }\n}\n\n.brand__text {\n  display: grid;\n  line-height: 1;\n  text-transform: uppercase;\n\n  strong {\n    color: var(--text-primary);\n    font-size: 20px;\n    font-weight: 700;\n    letter-spacing: 0;\n\n    span {\n      color: var(--primary);\n    }\n  }\n\n  small {\n    margin-top: 4px;\n    color: var(--text-secondary);\n    font-size: 7px;\n    font-weight: 700;\n    letter-spacing: 0.7px;\n  }\n}\n\n.nav {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: clamp(26px, 4vw, 56px);\n}\n\n.nav__link {\n  position: relative;\n  padding: 10px 0;\n  color: var(--text-secondary);\n  font-size: 13px;\n  font-weight: 500;\n  transition: color 180ms ease;\n\n  &::after {\n    position: absolute;\n    right: 0;\n    bottom: 2px;\n    left: 0;\n    height: 1px;\n    background: var(--primary);\n    content: \"\";\n    opacity: 0;\n    transform: scaleX(0.55);\n    transition:\n      opacity 180ms ease,\n      transform 180ms ease;\n  }\n\n  &:hover,\n  &--active {\n    color: var(--text-primary);\n\n    &::after {\n      opacity: 1;\n      transform: scaleX(1);\n    }\n  }\n}\n\n.quote-link {\n  display: inline-flex;\n  min-width: 176px;\n  height: 50px;\n  justify-self: end;\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  color: var(--text-primary);\n  font-size: 14px;\n  font-weight: 700;\n  transition:\n    border-color 180ms ease,\n    background 180ms ease,\n    transform 180ms ease;\n\n  &:hover {\n    border-color: var(--border-hover);\n    background: rgba(255, 255, 255, 0.04);\n    transform: translateY(-1px);\n  }\n}\n\n.menu-button {\n  display: none;\n}\n\n.hero {\n  position: relative;\n  display: grid;\n  min-height: 92vh;\n  overflow: hidden;\n  align-items: center;\n  border-bottom: 1px solid var(--border);\n  background: #020303;\n}\n\n.hero__image {\n  position: absolute;\n  inset: 0 0 0 auto;\n  width: min(68vw, 960px);\n  background:\n    linear-gradient(90deg, rgba(5, 6, 6, 0.5), rgba(5, 6, 6, 0.06) 28%, rgba(5, 6, 6, 0.36) 100%),\n    url(\"/assets/images/hero-house.png\") center right / cover no-repeat;\n  opacity: 0.94;\n}\n\n.hero__shade {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(90deg, #050606 0%, rgba(5, 6, 6, 0.94) 28%, rgba(5, 6, 6, 0.34) 58%, rgba(5, 6, 6, 0.82) 100%),\n    linear-gradient(180deg, rgba(5, 6, 6, 0.18) 0%, rgba(5, 6, 6, 0) 54%, rgba(5, 6, 6, 0.92) 100%);\n}\n\n.hero__content {\n  position: relative;\n  z-index: 1;\n  padding-top: 70px;\n}\n\n.eyebrow {\n  margin: 0 0 28px;\n  color: var(--text-secondary);\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n\n.eyebrow--green {\n  color: var(--primary);\n}\n\nh1,\nh2,\nh3,\np {\n  margin-top: 0;\n}\n\nh1 {\n  max-width: 600px;\n  margin-bottom: 28px;\n  color: var(--text-primary);\n  font-size: clamp(54px, 7vw, 82px);\n  font-weight: 700;\n  letter-spacing: 0;\n  line-height: 0.99;\n\n  span {\n    display: block;\n    color: var(--primary);\n  }\n}\n\n.hero__lead,\n.hero__support {\n  max-width: 470px;\n  color: var(--text-secondary);\n  font-size: 20px;\n  line-height: 1.55;\n}\n\n.hero__lead {\n  margin-bottom: 6px;\n}\n\n.hero__support {\n  margin-bottom: 44px;\n}\n\n.hero__actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 22px;\n}\n\n.button {\n  display: inline-flex;\n  min-height: 56px;\n  align-items: center;\n  justify-content: center;\n  gap: 11px;\n  border-radius: 12px;\n  padding: 0 30px;\n  font-size: 14px;\n  font-weight: 700;\n  white-space: nowrap;\n  transition:\n    border-color 180ms ease,\n    background 180ms ease,\n    box-shadow 180ms ease,\n    color 180ms ease,\n    transform 180ms ease;\n\n  svg {\n    width: 20px;\n    height: 20px;\n\n    path {\n      fill: none;\n      stroke: currentColor;\n      stroke-linecap: round;\n      stroke-linejoin: round;\n      stroke-width: 1.7;\n    }\n  }\n\n  &:hover {\n    transform: translateY(-1px);\n  }\n}\n\n.button--primary {\n  min-width: 238px;\n  background: var(--primary);\n  color: #071005;\n  box-shadow: 0 18px 42px rgba(154, 205, 0, 0.2);\n\n  &:hover {\n    background: var(--primary-hover);\n    box-shadow: 0 20px 48px rgba(154, 205, 0, 0.28);\n  }\n}\n\n.button--secondary,\n.button--ghost {\n  border: 1px solid var(--border);\n  background: rgba(5, 6, 6, 0.35);\n  color: var(--text-primary);\n\n  &:hover {\n    border-color: var(--border-hover);\n    background: rgba(255, 255, 255, 0.04);\n  }\n}\n\n.button--secondary {\n  min-width: 196px;\n}\n\n.button--ghost {\n  min-width: 142px;\n  min-height: 52px;\n  padding-inline: 25px;\n}\n\n.compatibility {\n  border-bottom: 1px solid var(--border);\n  background: rgba(6, 7, 7, 0.94);\n}\n\n.compatibility__inner {\n  display: flex;\n  min-height: 92px;\n  align-items: center;\n  gap: 70px;\n\n  p {\n    margin: 0;\n    color: var(--text-muted);\n    font-size: 13px;\n    font-weight: 600;\n    letter-spacing: 1.2px;\n    text-transform: uppercase;\n  }\n}\n\n.compatibility__logos {\n  display: grid;\n  flex: 1;\n  grid-template-columns: repeat(4, minmax(110px, 1fr));\n  align-items: center;\n  color: rgba(245, 245, 245, 0.52);\n\n  span {\n    display: grid;\n    min-height: 34px;\n    place-items: center;\n    border-left: 1px solid var(--border);\n    font-size: 20px;\n    font-weight: 700;\n  }\n\n  span:first-child {\n    border-left: 0;\n    font-size: 26px;\n    font-weight: 600;\n  }\n\n  span:nth-child(3) {\n    font-size: 25px;\n  }\n}\n\n.solutions {\n  display: grid;\n  grid-template-columns: minmax(250px, 330px) 1fr;\n  gap: 72px;\n  padding: 86px 0 54px;\n}\n\n.section-copy {\n  align-self: center;\n\n  h2 {\n    margin-bottom: 28px;\n    color: var(--text-primary);\n    font-size: clamp(38px, 4vw, 52px);\n    font-weight: 650;\n    letter-spacing: 0;\n    line-height: 1.15;\n  }\n\n  > p:not(.eyebrow) {\n    max-width: 325px;\n    margin-bottom: 46px;\n    color: var(--text-secondary);\n  }\n}\n\n.solution-grid {\n  display: grid;\n  min-width: 0;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  overflow: hidden;\n  border: 1px solid var(--border);\n  border-radius: 20px;\n}\n\n.solution-card {\n  position: relative;\n  min-height: 456px;\n  overflow: hidden;\n  background: var(--surface);\n  transition:\n    background 180ms ease,\n    transform 180ms ease;\n\n  + .solution-card {\n    border-left: 1px solid var(--border);\n  }\n\n  img {\n    width: 100%;\n    height: 64%;\n    object-fit: cover;\n    filter: saturate(0.92);\n    transition: transform 500ms ease;\n  }\n\n  &::after {\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(180deg, rgba(5, 6, 6, 0) 26%, rgba(5, 6, 6, 0.82) 64%, #090a0a 100%);\n    content: \"\";\n    pointer-events: none;\n  }\n\n  &:hover {\n    background: var(--surface-light);\n\n    img {\n      transform: scale(1.035);\n    }\n  }\n}\n\n.solution-card__body {\n  position: absolute;\n  z-index: 1;\n  right: 22px;\n  bottom: 24px;\n  left: 22px;\n\n  h3 {\n    margin-bottom: 10px;\n    color: var(--text-primary);\n    font-size: 20px;\n    font-weight: 650;\n  }\n\n  p {\n    min-height: 46px;\n    margin-bottom: 20px;\n    color: var(--text-secondary);\n    font-size: 13px;\n    line-height: 1.55;\n  }\n\n  span {\n    display: block;\n    color: var(--text-primary);\n    font-size: 25px;\n    text-align: right;\n  }\n}\n\n.control {\n  display: grid;\n  min-height: 548px;\n  grid-template-columns: minmax(280px, 390px) 1fr;\n  overflow: hidden;\n  margin-top: 0;\n  border: 1px solid var(--border);\n  border-radius: 9px;\n  background:\n    linear-gradient(90deg, rgba(5, 6, 6, 0.96) 0%, rgba(5, 6, 6, 0.88) 40%, rgba(5, 6, 6, 0.1) 70%),\n    var(--surface);\n}\n\n.control__copy {\n  position: relative;\n  z-index: 1;\n  padding: clamp(42px, 5vw, 62px) 0 clamp(42px, 5vw, 62px) clamp(34px, 5vw, 52px);\n\n  h2 {\n    max-width: 320px;\n    margin-bottom: 24px;\n    font-size: clamp(36px, 4vw, 48px);\n    font-weight: 650;\n    letter-spacing: 0;\n    line-height: 1.12;\n  }\n\n  > p:not(.eyebrow) {\n    max-width: 325px;\n    margin-bottom: 40px;\n    color: var(--text-secondary);\n  }\n}\n\n.check-list {\n  display: grid;\n  gap: 16px;\n  margin: 0 0 42px;\n  padding: 0;\n  color: var(--text-secondary);\n  list-style: none;\n\n  li {\n    position: relative;\n    padding-left: 36px;\n\n    &::before {\n      position: absolute;\n      top: 1px;\n      left: 0;\n      display: grid;\n      width: 22px;\n      height: 22px;\n      place-items: center;\n      border: 1px solid var(--primary);\n      border-radius: 999px;\n      color: var(--primary);\n      content: \"\u2713\";\n      font-size: 12px;\n      font-weight: 700;\n    }\n  }\n}\n\n.control__visual {\n  min-height: 548px;\n  background:\n    linear-gradient(90deg, rgba(5, 6, 6, 0.86), rgba(5, 6, 6, 0.08) 40%, rgba(5, 6, 6, 0.18)),\n    url(\"/assets/images/mobile-control.png\") center right / cover no-repeat;\n}\n\n.benefits {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  margin-top: 32px;\n  overflow: hidden;\n  border: 1px solid var(--border);\n  border-radius: 9px;\n  background: rgba(12, 13, 13, 0.62);\n}\n\n.benefit {\n  display: grid;\n  grid-template-columns: 40px 1fr;\n  gap: 20px;\n  align-items: center;\n  min-height: 112px;\n  padding: 26px 28px;\n\n  + .benefit {\n    border-left: 1px solid var(--border);\n  }\n\n  h3 {\n    margin-bottom: 4px;\n    color: var(--text-primary);\n    font-size: 15px;\n    font-weight: 650;\n  }\n\n  p {\n    margin: 0;\n    color: var(--text-secondary);\n    font-size: 13px;\n  }\n}\n\n.benefit__icon {\n  position: relative;\n  width: 36px;\n  height: 36px;\n  color: var(--primary);\n\n  &::before,\n  &::after {\n    position: absolute;\n    content: \"\";\n  }\n\n  &[data-icon=\"tool\"]::before {\n    inset: 6px 12px;\n    border: 3px solid currentColor;\n    border-top-color: transparent;\n    border-radius: 999px;\n    transform: rotate(40deg);\n  }\n\n  &[data-icon=\"tool\"]::after {\n    right: 2px;\n    bottom: 2px;\n    width: 22px;\n    height: 4px;\n    border-radius: 999px;\n    background: currentColor;\n    transform: rotate(-45deg);\n  }\n\n  &[data-icon=\"gear\"]::before {\n    inset: 4px;\n    border: 3px solid currentColor;\n    border-radius: 999px;\n    box-shadow:\n      0 -8px 0 -5px currentColor,\n      0 8px 0 -5px currentColor,\n      -8px 0 0 -5px currentColor,\n      8px 0 0 -5px currentColor;\n  }\n\n  &[data-icon=\"gear\"]::after {\n    inset: 14px;\n    border-radius: 999px;\n    background: currentColor;\n  }\n\n  &[data-icon=\"headset\"]::before {\n    inset: 4px 5px 11px;\n    border: 3px solid currentColor;\n    border-bottom: 0;\n    border-radius: 999px 999px 0 0;\n  }\n\n  &[data-icon=\"headset\"]::after {\n    right: 5px;\n    bottom: 6px;\n    width: 13px;\n    height: 8px;\n    border-right: 3px solid currentColor;\n    border-bottom: 3px solid currentColor;\n    border-radius: 0 0 8px 0;\n  }\n\n  &[data-icon=\"shield\"]::before {\n    inset: 2px 5px;\n    border: 3px solid currentColor;\n    border-radius: 15px 15px 18px 18px;\n    clip-path: polygon(50% 0, 100% 18%, 100% 62%, 50% 100%, 0 62%, 0 18%);\n  }\n}\n\n.cta {\n  display: grid;\n  grid-template-columns: 1fr auto;\n  gap: 40px;\n  align-items: center;\n  margin-top: 36px;\n  padding: clamp(38px, 5vw, 58px) clamp(34px, 5vw, 52px);\n  border: 1px solid var(--border);\n  border-radius: 9px;\n  background:\n    linear-gradient(90deg, rgba(13, 14, 14, 0.92), rgba(8, 9, 9, 0.62)),\n    var(--background-secondary);\n\n  h2 {\n    margin-bottom: 16px;\n    font-size: clamp(36px, 4vw, 50px);\n    font-weight: 650;\n    letter-spacing: 0;\n    line-height: 1.12;\n  }\n\n  p:not(.eyebrow) {\n    margin: 0;\n    color: var(--text-secondary);\n  }\n}\n\n.cta__action {\n  display: grid;\n  justify-items: center;\n  gap: 18px;\n\n  small {\n    color: var(--text-secondary);\n    font-size: 12px;\n  }\n}\n\n.footer {\n  display: grid;\n  grid-template-columns: 1fr auto 1fr;\n  gap: 42px;\n  align-items: center;\n  padding: 64px 0 40px;\n  color: var(--text-muted);\n\n  nav {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: clamp(20px, 4vw, 42px);\n  }\n\n  a {\n    font-size: 12px;\n    transition: color 180ms ease;\n\n    &:hover {\n      color: var(--text-primary);\n    }\n  }\n\n  p {\n    justify-self: end;\n    margin: 0;\n    font-size: 12px;\n  }\n}\n\n.whatsapp-float {\n  position: fixed;\n  z-index: 25;\n  right: 28px;\n  bottom: 28px;\n  display: grid;\n  width: 68px;\n  height: 68px;\n  place-items: center;\n  border: 1px solid rgba(255, 255, 255, 0.28);\n  border-radius: 999px;\n  background: var(--primary);\n  color: #fff;\n  box-shadow: 0 0 0 12px rgba(154, 205, 0, 0.12), 0 18px 42px rgba(154, 205, 0, 0.25);\n  transition:\n    background 180ms ease,\n    transform 180ms ease;\n\n  svg {\n    width: 38px;\n    height: 38px;\n  }\n\n  path {\n    fill: none;\n    stroke: currentColor;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    stroke-width: 1.7;\n  }\n\n  &:hover {\n    background: var(--primary-hover);\n    transform: translateY(-2px);\n  }\n}\n\n@media (max-width: 1100px) {\n  .site-header {\n    grid-template-columns: auto 1fr auto auto;\n    gap: 16px;\n  }\n\n  .nav {\n    gap: 22px;\n  }\n\n  .solutions {\n    grid-template-columns: 1fr;\n    gap: 38px;\n  }\n\n  .section-copy {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) auto;\n    gap: 28px 40px;\n    align-items: end;\n\n    .eyebrow,\n    h2,\n    > p:not(.eyebrow) {\n      grid-column: 1;\n    }\n\n    .button {\n      grid-column: 2;\n      grid-row: 2 / span 2;\n    }\n  }\n\n  .benefits {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .benefit:nth-child(3) {\n    border-left: 0;\n  }\n\n  .benefit:nth-child(n + 3) {\n    border-top: 1px solid var(--border);\n  }\n}\n\n@media (max-width: 860px) {\n  .page-shell {\n    width: min(100% - 40px, 1240px);\n  }\n\n  .site-header {\n    height: 76px;\n    padding-inline: 20px;\n  }\n\n  .quote-link {\n    display: none;\n  }\n\n  .menu-button {\n    position: relative;\n    z-index: 31;\n    display: grid;\n    width: 44px;\n    height: 44px;\n    place-items: center;\n    justify-self: end;\n    border: 1px solid var(--border);\n    border-radius: 10px;\n    background: rgba(255, 255, 255, 0.04);\n\n    span {\n      width: 18px;\n      height: 1px;\n      background: var(--text-primary);\n      transition:\n        transform 180ms ease,\n        opacity 180ms ease;\n    }\n\n    &[aria-expanded=\"true\"] span:first-child {\n      transform: translateY(5px) rotate(45deg);\n    }\n\n    &[aria-expanded=\"true\"] span:last-child {\n      transform: translateY(-5px) rotate(-45deg);\n    }\n  }\n\n  .nav {\n    position: fixed;\n    z-index: 30;\n    inset: 0;\n    display: grid;\n    align-content: center;\n    justify-items: center;\n    gap: 26px;\n    background: rgba(5, 6, 6, 0.94);\n    opacity: 0;\n    pointer-events: none;\n    transform: translateY(-10px);\n    transition:\n      opacity 180ms ease,\n      transform 180ms ease;\n    backdrop-filter: blur(20px);\n  }\n\n  .nav--open {\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateY(0);\n  }\n\n  .nav__link {\n    font-size: 24px;\n  }\n\n  .hero {\n    min-height: 88vh;\n    align-items: end;\n  }\n\n  .hero__image {\n    inset: 72px 0 auto;\n    width: 100%;\n    height: 54%;\n    background-position: center top;\n  }\n\n  .hero__shade {\n    background:\n      linear-gradient(180deg, rgba(5, 6, 6, 0.04) 0%, rgba(5, 6, 6, 0.42) 35%, #050606 73%),\n      linear-gradient(90deg, rgba(5, 6, 6, 0.9), rgba(5, 6, 6, 0.18));\n  }\n\n  .hero__content {\n    padding: 360px 0 64px;\n  }\n\n  h1 {\n    max-width: 520px;\n    font-size: clamp(44px, 12vw, 56px);\n  }\n\n  .hero__lead,\n  .hero__support {\n    max-width: 520px;\n    font-size: 17px;\n  }\n\n  .compatibility__inner {\n    display: grid;\n    gap: 24px;\n    padding-block: 26px;\n  }\n\n  .compatibility__logos {\n    grid-template-columns: repeat(2, minmax(120px, 1fr));\n    gap: 18px 0;\n\n    span:nth-child(odd) {\n      border-left: 0;\n    }\n  }\n\n  .solution-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    border-radius: 16px;\n  }\n\n  .solution-card {\n    min-height: 390px;\n  }\n\n  .solution-card:nth-child(3) {\n    border-left: 0;\n  }\n\n  .solution-card:nth-child(n + 3) {\n    border-top: 1px solid var(--border);\n  }\n\n  .control {\n    grid-template-columns: 1fr;\n  }\n\n  .control__copy {\n    padding-right: clamp(34px, 5vw, 52px);\n  }\n\n  .control__visual {\n    min-height: 390px;\n    background-position: center;\n  }\n\n  .cta,\n  .footer {\n    grid-template-columns: 1fr;\n  }\n\n  .cta__action,\n  .footer p {\n    justify-self: start;\n  }\n\n  .footer nav {\n    justify-content: flex-start;\n  }\n}\n\n@media (max-width: 560px) {\n  .page-shell {\n    width: min(100% - 32px, 1240px);\n  }\n\n  .brand__text strong {\n    font-size: 17px;\n  }\n\n  .brand__text small {\n    font-size: 6px;\n  }\n\n  .hero__content {\n    padding-top: 320px;\n  }\n\n  .hero__actions,\n  .button {\n    width: 100%;\n  }\n\n  .button {\n    min-width: 0;\n  }\n\n  .solutions {\n    padding-top: 64px;\n  }\n\n  .section-copy {\n    display: block;\n\n    .button {\n      width: auto;\n      margin-top: 12px;\n    }\n  }\n\n  .solution-grid,\n  .benefits {\n    grid-template-columns: 1fr;\n  }\n\n  .solution-card {\n    min-height: 360px;\n\n    + .solution-card {\n      border-top: 1px solid var(--border);\n      border-left: 0;\n    }\n  }\n\n  .benefit {\n    border-left: 0;\n\n    + .benefit {\n      border-top: 1px solid var(--border);\n    }\n  }\n\n  .cta {\n    padding-inline: 24px;\n  }\n\n  .whatsapp-float {\n    right: 18px;\n    bottom: 18px;\n    width: 58px;\n    height: 58px;\n\n    svg {\n      width: 32px;\n      height: 32px;\n    }\n  }\n}\n"] }]
    }], () => [{ type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i0.Renderer2 }], { onWindowScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LandingComponent, { className: "LandingComponent", filePath: "src/app/landing/landing.component.ts", lineNumber: 36 }); })();
//# sourceMappingURL=landing.component.js.map