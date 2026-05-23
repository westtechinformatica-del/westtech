const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5491112345678'

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

export function productWhatsAppLink(productName: string, customMessage?: string): string {
  const message =
    customMessage ||
    `Hola Westtech! Me interesa el producto: *${productName}*. ¿Podrían darme más información y disponibilidad? 🙏`
  return buildWhatsAppLink(message)
}

export function generalWhatsAppLink(message?: string): string {
  const text = message || '¡Hola Westtech! Tengo una consulta sobre sus productos. ¿Me pueden ayudar?'
  return buildWhatsAppLink(text)
}
