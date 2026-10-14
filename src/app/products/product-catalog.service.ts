import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ProductCatalogService {
  readonly products: readonly Product[] = [
    { id: 'alexa', name: 'Alexa', category: 'Asistentes', image: 'assets/images/alexaProducto.png', description: 'Un asistente para acompañarte en tu día a día.', features: ['Consultá modelo y compatibilidad', 'Consultá las opciones disponibles'], price: 140000 },
    { id: 'foco-smart', name: 'Foco smart', category: 'Iluminación', image: 'assets/images/focoProducto.png', description: 'Dale un nuevo ritmo a la iluminación de tus espacios.', features: ['Consultá potencia y tipo de rosca', 'Consultá compatibilidad'], price: 20000 },
    { id: 'control-smart', name: 'Control smart', category: 'Control', image: 'assets/images/controlProducto.png', description: 'Descubrí opciones para conectar tus equipos.', features: ['Consultá equipos compatibles', 'Consultá conexión y configuración'], price: 30000 },
    { id: 'camara-interna', name: 'Cámara interna', category: 'Seguridad', image: 'assets/images/camaraInteriorProducto.png', description: 'Encontrá una opción de monitoreo para tus interiores.', features: ['Consultá resolución y almacenamiento', 'Consultá las opciones de instalación'], price: 50000 },
    { id: 'camara-externa', name: 'Cámara externa', category: 'Seguridad', image: 'assets/images/camaraExteriorProducto.png', description: 'Explorá soluciones de monitoreo para tus accesos.', features: ['Consultá protección para exteriores', 'Consultá resolución y almacenamiento'], price: 65000},
    { id: 'sensor', name: 'Sensor smart', category: 'Seguridad', image: 'assets/images/sensorProducto.png', description: 'Sumá sensores a tu proyecto de automatización.', features: ['Consultá tipo de sensor', 'Consultá compatibilidad y alimentación'], price: 20000 },
    { id: 'interruptor', name: 'Interruptor smart', category: 'Iluminación', image: 'assets/images/interruptorProducto.png', description: 'Descubrí opciones de control para tus luces.', features: ['Consultá cantidad de teclas', 'Consultá requisitos de instalación'], price: 25000 },
  ];
}
