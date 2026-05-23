'use client'

import { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { generalWhatsAppLink } from '@/lib/whatsapp'
import { cn } from '@/lib/utils'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip card */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 w-72 animate-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Westtech</p>
              <p className="text-xs text-green-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
                En línea ahora
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="ml-auto text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            ¡Hola! 👋 ¿En qué podemos ayudarte hoy? Consultanos por precio, disponibilidad y envíos.
          </p>
          <a
            href={generalWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-medium text-sm py-2.5 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chatear ahora
          </a>
        </div>
      )}

      {/* FAB button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-200',
          'bg-green-500 hover:bg-green-600 hover:scale-110 active:scale-95',
          'ring-4 ring-green-200'
        )}
        aria-label="Contactar por WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
        )}
      </button>
    </div>
  )
}
