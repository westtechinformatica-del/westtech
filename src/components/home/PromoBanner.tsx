import Link from 'next/link'
import { ArrowRight, Truck, Shield, CreditCard, Headphones } from 'lucide-react'

const benefits = [
  {
    icon: Truck,
    title: 'Envíos a todo el país',
    desc: 'Hacemos envíos a cualquier provincia de Argentina',
  },
  {
    icon: Shield,
    title: 'Garantía oficial',
    desc: 'Todos nuestros productos tienen garantía',
  },
  {
    icon: CreditCard,
    title: 'Cuotas sin interés',
    desc: 'Hasta 12 cuotas con las principales tarjetas',
  },
  {
    icon: Headphones,
    title: 'Soporte por WhatsApp',
    desc: 'Te asesoramos antes y después de tu compra',
  },
]

export default function PromoBanner() {
  return (
    <>
      {/* Benefits strip */}
      <section className="py-10 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                  <benefit.icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{benefit.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo CTA */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-yellow-400 text-yellow-900 mb-4">
            ¡IMPORTACIONES DIRECTAS!
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Los mejores precios en tecnología
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Importamos directamente para darte los mejores precios en notebooks, iPads, TV boxes, proyectores y más.
            Consultanos sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/productos"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Ver catálogo completo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all border border-white/30"
            >
              Contactar por WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
