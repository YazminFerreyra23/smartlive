import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { createWhatsappUrl } from '../shared/contact';
import { SiteFooterComponent } from '../shared/site-footer.component';
import { ProductCatalogService } from './product-catalog.service';
import { Product, ProductCategory } from './product.model';

const normalize = (value: string): string => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe, SiteFooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  private readonly catalog = inject(ProductCatalogService);
  protected readonly search = signal('');
  protected readonly category = signal<ProductCategory | 'Todos'>('Todos');
  protected readonly categories = computed(() => ['Todos' as const, ...new Set(this.catalog.products.map(product => product.category))]);
  protected readonly products = computed(() => {
    const query = normalize(this.search().trim());
    return this.catalog.products.filter(product =>
      (this.category() === 'Todos' || product.category === this.category()) &&
      normalize(`${product.name} ${product.category} ${product.description}`).includes(query),
    );
  });

  protected consultUrl(product: Product): string {
    return createWhatsappUrl(`Hola ModoConectado, quiero consultar por ${product.name} (ref. ${product.id}). ¿Me cuentan el precio, las características y la disponibilidad?`);
  }

  protected resetFilters(): void {
    this.search.set('');
    this.category.set('Todos');
  }
}
