import { CommonModule, DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Inject,
  Renderer2,
  signal,
} from '@angular/core';

interface NavigationItem {
  label: string;
  target: string;
}

interface SolutionCard {
  eyebrow: string;
  title: string;
  description: string;
  headline: string;
  promise: string;
  result: string;
  image: string;
  voiceCommand: string;
  price: string;
  products: string[];
  outcomes: string[];
  featuredProducts?: ComboFeaturedProduct[];
}

interface ComboFeaturedProduct {
  label: string;
  description: string;
  image: string;
  x: number;
  y: number;
}

interface PromoProduct {
  quantity: string;
  name: string;
  image: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingComponent {
  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);
  protected readonly activeSolutionIndex = signal(0);

  private readonly whatsappPhone = '5493512517479';

  protected readonly whatsappUrl = this.createWhatsappUrl(
    'Hola ModoConectado, quiero recibir información para automatizar mi espacio.',
  );

  protected readonly navItems: NavigationItem[] = [
    { label: 'Inicio', target: 'inicio' },
    { label: 'Soluciones', target: 'soluciones' },
    { label: 'Combos', target: 'combos' },
    { label: 'Sobre nosotros', target: 'sobre-nosotros' },
    { label: 'Contacto', target: 'contacto' },
  ];

  protected readonly solutions: SolutionCard[] = [
    {
      eyebrow: 'Smart Home',
      title: 'Departamento',
      description: 'Alexa, cámaras y escenas inteligentes.',
      headline: 'Tu departamento automatizado y más cómodo.',
      promise: 'Controlá luces, voz y entretenimiento sin complicarte con instalaciones grandes.',
      result: 'Perfecto para sumar confort rápido en espacios compactos.',
      image: 'assets/images/solution-apartment-alexa-security.jpg',
      voiceCommand: 'Alexa, modo descanso',
      price: '$220.000',
      products: ['1 Alexa', '5 focos smart', '1 control smart'],
      outcomes: ['Control por voz', 'Automatización inteligente', 'Mayor comodidad', 'Todo desde una sola app'],
      featuredProducts: [
        {
          label: '1 Alexa',
          description: 'Controlá luces, escenas y rutinas usando solo tu voz.',
          image: 'assets/images/Alexa.png',
          x: 68,
          y: 68,
        },
        {
          label: '5 focos smart',
          description: 'Apagá, encendé y regulá las luces desde donde estés.',
          image: 'assets/images/foco.png',
          x: 52,
          y: 28,
        },
        {
          label: '1 control',
          description: 'Manejás TV, aire y equipos compatibles desde una sola app.',
          image: 'assets/images/control.png',
          x: 22,
          y: 62,
        },
      ],
    },
    {
      eyebrow: 'Smart Home',
      title: 'Casa',
      description: 'Alexa, focos, sensores y cámaras.',
      headline: 'Tu casa inteligente. Tu vida más simple.',
      promise: 'Automatizá los ambientes principales y controlá seguridad, luces y rutinas desde un solo lugar.',
      result: 'Ideal para empezar con una casa conectada sin instalaciones invasivas.',
      image: 'assets/images/solution-home-alexa-security.jpg',
      voiceCommand: 'Alexa, llegué a casa',
      price: '$450.000',
      products: [
        '1 Alexa',
        '5 focos smart',
        '1 cámara interna',
        '1 cámara externa',
        '2 sensores',
        '1 control smart',
        '2 interruptores',
      ],
      outcomes: ['Luces encendidas', 'Cámaras monitoreando', 'Sensores activos', 'Todo desde tu celular'],
      featuredProducts: [
        {
          label: '1 Alexa',
          description: 'Activá escenas completas con comandos de voz simples.',
          image: 'assets/images/Alexa.png',
          x: 20,
          y: 67,
        },
        {
          label: '5 focos',
          description: 'Controlá la iluminación de los ambientes principales desde el celular.',
          image: 'assets/images/foco.png',
          x: 44,
          y: 28,
        },
        {
          label: '1 cámara interna',
          description: 'Mirá lo que pasa dentro de tu casa en tiempo real.',
          image: 'assets/images/camaraInterna.png',
          x: 67,
          y: 42,
        },
        {
          label: '1 cámara externa',
          description: 'Sumá monitoreo en accesos, patio o ingreso principal.',
          image: 'assets/images/camaraExterna.png',
          x: 77,
          y: 20,
        },
        {
          label: '2 sensores',
          description: 'Recibí alertas por movimiento, puertas o ventanas según la instalación.',
          image: 'assets/images/sensor.png',
          x: 33,
          y: 51,
        },
        {
          label: '1 control',
          description: 'Centralizá TV, aire y equipos compatibles en una sola app.',
          image: 'assets/images/control.png',
          x: 73,
          y: 73,
        },
        {
          label: '2 interruptores',
          description: 'Automatizá luces o circuitos sin perder el uso manual.',
          image: 'assets/images/interruptor.png',
          x: 45,
          y: 76,
        },
      ],
    },
    {
      eyebrow: 'Smart Business',
      title: 'Negocios',
      description: 'Monitoreo, alarmas y control por voz.',
      headline: 'Tu negocio no depende de que estés presente.',
      promise: 'Monitoreá, encendé luces y recibí alertas desde el celular cuando no estás.',
      result: 'Pensado para operar con más control y menos preocupación diaria.',
      image: 'assets/images/solution-business-alexa-security.jpg',
      voiceCommand: 'Alexa, activar modo negocio',
      price: '$420.000',
      products: [
        '1 Alexa',
        '2 interruptores',
        '1 cámara externa',
        '1 cámara interna',
        '2 sensores',
        '3 focos smart',
        '1 control smart',
      ],
      outcomes: ['Mirá tu negocio en tiempo real', 'Controlá las luces', 'Recibí alertas', 'Activá funciones con Alexa'],
      featuredProducts: [
        {
          label: '1 Alexa',
          description: 'Activá rutinas de apertura, cierre o seguridad con comandos de voz.',
          image: 'assets/images/Alexa.png',
          x: 18,
          y: 66,
        },
        {
          label: '2 interruptores',
          description: 'Automatizá luces o circuitos clave sin perder el control manual.',
          image: 'assets/images/interruptor.png',
          x: 42,
          y: 72,
        },
        {
          label: '1 cámara externa',
          description: 'Controlá accesos, vidriera o entrada desde tu celular.',
          image: 'assets/images/camaraExterna.png',
          x: 76,
          y: 24,
        },
        {
          label: '1 cámara interna',
          description: 'Supervisá atención, caja o movimiento dentro del local.',
          image: 'assets/images/camaraInterna.png',
          x: 66,
          y: 45,
        },
        {
          label: '2 sensores',
          description: 'Recibí alertas ante aperturas o movimientos fuera de horario.',
          image: 'assets/images/sensor.png',
          x: 34,
          y: 48,
        },
        {
          label: '3 focos',
          description: 'Programá iluminación para atención, cierre o ahorro de energía.',
          image: 'assets/images/foco.png',
          x: 50,
          y: 28,
        },
        {
          label: '1 control',
          description: 'Centralizá aire, TV u otros equipos compatibles desde una app.',
          image: 'assets/images/control.png',
          x: 74,
          y: 72,
        },
      ],
    },
  ];

  protected readonly promoProducts: PromoProduct[] = [
    {
      quantity: '1',
      name: 'Alexa',
      image: 'assets/images/Alexa.png',
    },
    {
      quantity: '5',
      name: 'Focos smart',
      image: 'assets/images/foco.png',
    },
    {
      quantity: '1',
      name: 'Control smart',
      image: 'assets/images/control.png',
    },
    {
      quantity: '1',
      name: 'Cámara interna',
      image: 'assets/images/camaraInterna.png',
    },
  ];

  protected readonly benefits: Benefit[] = [
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

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer: Renderer2,
  ) {
    this.updateScrollState();
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.updateScrollState();
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((isOpen) => {
      const nextState = !isOpen;
      this.syncBodyMenuState(nextState);
      return nextState;
    });
  }

  protected closeMenu(): void {
    if (!this.isMenuOpen()) {
      return;
    }

    this.isMenuOpen.set(false);
    this.syncBodyMenuState(false);
  }

  protected setActiveSolution(index: number): void {
    this.activeSolutionIndex.set(index);
  }

  protected activeSolution(): SolutionCard {
    return this.solutions[this.activeSolutionIndex()] ?? this.solutions[0];
  }

  protected comboWhatsappUrl(solution: SolutionCard): string {
    return this.createWhatsappUrl(
      `Hola ModoConectado, quiero cotizar el combo para ${solution.title}. Me interesa automatizar con Alexa, cámaras y dispositivos inteligentes.`,
    );
  }

  private updateScrollState(): void {
    this.isScrolled.set(this.document.defaultView?.scrollY ? this.document.defaultView.scrollY > 12 : false);
  }

  private createWhatsappUrl(message: string): string {
    return `https://wa.me/${this.whatsappPhone}?text=${encodeURIComponent(message)}`;
  }

  private syncBodyMenuState(isOpen: boolean): void {
    if (isOpen) {
      this.renderer.addClass(this.document.body, 'menu-open');
      return;
    }

    this.renderer.removeClass(this.document.body, 'menu-open');
  }
}
