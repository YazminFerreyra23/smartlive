export type ProductCategory = 'Asistentes' | 'Iluminación' | 'Seguridad' | 'Control';

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly category: ProductCategory;
  readonly image: string;
  readonly description: string;
  readonly features: readonly string[];
  readonly price: number | null;
}
