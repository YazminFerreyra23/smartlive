import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { createWhatsappUrl } from './contact';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header>
      <a class="brand" routerLink="/" (click)="menuOpen.set(false)" aria-label="ModoConectado, ir al inicio"><img src="assets/images/logo-horizontal(1).svg" alt="ModoConectado" width="220" height="58"></a>
      <button class="menu-toggle" type="button" aria-controls="main-navigation" [attr.aria-expanded]="menuOpen()" (click)="menuOpen.set(!menuOpen())">{{ menuOpen() ? 'Cerrar ✕' : 'Menú ☰' }}</button>
      <nav id="main-navigation" [class.open]="menuOpen()" aria-label="Navegación principal" (keydown.escape)="menuOpen.set(false)">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" ariaCurrentWhenActive="page" (click)="menuOpen.set(false)">Inicio</a>
        <a routerLink="/productos" routerLinkActive="active" ariaCurrentWhenActive="page" (click)="menuOpen.set(false)">Productos</a>
        <a routerLink="/" fragment="soluciones" (click)="menuOpen.set(false)">Soluciones</a>
        <a routerLink="/" fragment="combos" (click)="menuOpen.set(false)">Combos</a>
        <a routerLink="/" fragment="contacto" (click)="menuOpen.set(false)">Contacto</a>
      </nav>
      <a class="contact" [href]="contactUrl" target="_blank" rel="noopener noreferrer">Hablemos <span aria-hidden="true">↗</span></a>
    </header>
  `,
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  protected readonly menuOpen = signal(false);
  protected readonly contactUrl = createWhatsappUrl('Hola ModoConectado, quiero recibir asesoramiento sobre sus productos y soluciones.');
}
