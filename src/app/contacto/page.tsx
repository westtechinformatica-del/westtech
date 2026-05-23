import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, Mail, MapPin, Clock, ArrowRight } from 'lucide-react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}
import { generalWhatsAppLink } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Contacto | Westtech',
  description: 'Contactanos por WhatsApp, email o redes sociales. Respondemos rápido.',
}

export default function ContactPage() {
  const whatsappLink = generalWhatsAppLink()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            ¿Cómo podemos ayudarte?
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Estamos para ayudarte antes y después de tu compra. Respondemos por WhatsApp en minutos.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-16">
        {/* WhatsApp CTA - highlighted */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-4 bg-green-500 hover:bg-green-600 text-white p-6 rounded-2xl shadow-lg mb-6 transition-all hover:shadow-xl hover:-translate-y-0.5 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
              <MessageCircle className="w-7 h-7" />
            </div>
            <div>
              <p className="font-bold text-xl">Escribinos por WhatsApp</p>
              <p className="text-green-100 text-sm">Respondemos en minutos · Lun–Sáb 9:00–20:00</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {[
            {
              icon: Mail,
              title: 'Email',
              value: 'ventas@westtech.com.ar',
              desc: 'Te respondemos en menos de 24hs',
              href: 'mailto:ventas@westtech.com.ar',
              color: 'text-blue-600 bg-blue-50',
            },
            {
              icon: InstagramIcon,
              title: 'Instagram',
              value: '@westtech.ar',
              desc: 'Seguinos y enviá un DM',
              href: 'https://instagram.com/westtech',
              color: 'text-pink-600 bg-pink-50',
            },
            {
              icon: FacebookIcon,
              title: 'Facebook',
              value: 'Westtech Argentina',
              desc: 'Mandanos un mensaje directo',
              href: 'https://facebook.com/westtech',
              color: 'text-blue-700 bg-blue-50',
            },
            {
              icon: Clock,
              title: 'Horario de atención',
              value: 'Lun–Sáb: 9:00–20:00',
              desc: 'Buenos Aires, Argentina (ART)',
              href: null,
              color: 'text-gray-600 bg-gray-50',
            },
          ].map((item) => {
            const Card = (
              <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-blue-200 hover:shadow-md transition-all">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${item.color}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{item.title}</p>
                <p className="font-semibold text-gray-900">{item.value}</p>
                <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            )
            return item.href ? (
              <a key={item.title} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                {Card}
              </a>
            ) : (
              <div key={item.title}>{Card}</div>
            )
          })}
        </div>

        {/* Location */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Ubicación</p>
            <p className="text-gray-600 text-sm">
              Buenos Aires, Argentina · Realizamos envíos a todo el país mediante correo oficial y servicios de courier.
            </p>
            <p className="text-sm text-blue-600 font-medium mt-2">
              Retiro en mano disponible en zona GBA (consultá disponibilidad)
            </p>
          </div>
        </div>

        {/* FAQ teaser */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm mb-3">¿Tenés preguntas frecuentes?</p>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Ver preguntas frecuentes
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
