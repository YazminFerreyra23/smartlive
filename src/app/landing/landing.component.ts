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
  image: string;
  voiceCommand: string;
  price: string;
  products: string[];
  outcomes: string[];
}

interface ProductCategory {
  title: string;
  description: string;
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
    'Hola SmartLife, quiero recibir información para automatizar mi espacio.',
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
      title: 'Casa',
      description: 'Alexa, focos, sensores y cámaras.',
      headline: 'Tu casa inteligente. Tu vida más simple.',
      image: 'assets/images/solution-home-alexa-security.jpg',
      voiceCommand: 'Alexa, llegué a casa',
      price: '$420.000',
      products: ['1 Alexa', 'Focos smart', 'Cámaras', 'Sensores', 'Módulos inteligentes'],
      outcomes: ['Luces encendidas', 'Cámaras monitoreando', 'Sensores activos', 'Todo desde tu celular'],
    },
    {
      eyebrow: 'Smart Home',
      title: 'Departamento',
      description: 'Alexa, cámaras y escenas inteligentes.',
      headline: 'Tu departamento automatizado y más cómodo.',
      image: 'assets/images/solution-apartment-alexa-security.jpg',
      voiceCommand: 'Alexa, modo descanso',
      price: '$220.000',
      products: ['1 Alexa', '3 focos smart', '1 control smart'],
      outcomes: ['Control por voz', 'Automatización inteligente', 'Mayor comodidad', 'Todo desde una sola app'],
    },
    {
      eyebrow: 'Smart Business',
      title: 'Negocios',
      description: 'Monitoreo, alarmas y control por voz.',
      headline: 'Tu negocio no depende de que estés presente.',
      image: 'assets/images/solution-business-alexa-security.jpg',
      voiceCommand: 'Alexa, activar modo negocio',
      price: '$350.000',
      products: ['1 Alexa', 'Cámaras', 'Sensores de apertura', 'Luces smart', 'Control remoto'],
      outcomes: ['Mirá tu negocio en tiempo real', 'Controlá las luces', 'Recibí alertas', 'Activá funciones con Alexa'],
    },
    {
      eyebrow: 'Smart Security',
      title: 'Kioscos',
      description: 'Cierre inteligente, cámaras y Alexa.',
      headline: 'Vos descansás. Tu kiosco queda protegido.',
      image: 'assets/images/solution-kiosk-alexa-security.jpg',
      voiceCommand: 'Alexa, modo ahorro',
      price: '$415.000',
      products: ['1 Alexa', 'Cámaras', 'Sensores', 'Módulos de interruptor', 'Alertas al celular'],
      outcomes: ['Apagado automático', 'Monitoreo remoto', 'Sensores activos', 'Menos consumo'],
    },
  ];

  protected readonly productCategories: ProductCategory[] = [
    {
      title: 'Alexa Echo Dot',
      description: 'Control por voz para luces, escenas y rutinas.',
    },
    {
      title: 'Focos inteligentes',
      description: 'Iluminación regulable y programable por ambientes.',
    },
    {
      title: 'Controles remotos',
      description: 'Centralizá TV, aire y equipos compatibles.',
    },
    {
      title: 'Cámaras de seguridad',
      description: 'Interior y exterior con monitoreo desde el celular.',
    },
    {
      title: 'Módulos para interruptores',
      description: 'Automatización oculta sin cambiar la estética.',
    },
    {
      title: 'Sensores de apertura',
      description: 'Alertas para puertas, ventanas y accesos.',
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
      `Hola SmartLife, quiero cotizar el combo para ${solution.title}. Me interesa automatizar con Alexa, cámaras y dispositivos inteligentes.`,
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
