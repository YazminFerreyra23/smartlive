import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  route: string;
  fragment?: string;
}

@Component({
  selector: 'app-site-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="site-footer">
      <a class="brand" routerLink="/" fragment="inicio" aria-label="ModoConectado, ir al inicio">
        <img src="assets/images/logo-horizontal(1).svg" alt="ModoConectado" width="220" height="58">
      </a>

      <nav aria-label="Navegación del footer">
        @for (link of links; track link.label) {
          <a [routerLink]="link.route" [fragment]="link.fragment">{{ link.label }}</a>
        }
      </nav>

      <p>© 2024 ModoConectado. Todos los derechos reservados.</p>
    </footer>
  `,
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  protected readonly links: readonly FooterLink[] = [
    { label: 'Inicio', route: '/', fragment: 'inicio' },
    { label: 'Productos', route: '/productos' },
    { label: 'Soluciones', route: '/', fragment: 'soluciones' },
    { label: 'Combos', route: '/', fragment: 'combos' },
    { label: 'Contacto', route: '/', fragment: 'contacto' },
  ];
}
