const WHATSAPP_PHONE = '5493512008632';

export function createWhatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
